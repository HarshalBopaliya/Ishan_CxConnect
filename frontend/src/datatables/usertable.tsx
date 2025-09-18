import { useState, useEffect, useCallback } from "react";
import DataTable from "../../components/tables";
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../../types/user-table";
import { fetchUsers } from "../../services/user/users";

export default function UserTable() {
  const [data, setData] = useState<User[]>([]);
  const [paginationInfo, setPaginationInfo] = useState({
    totalRecords: 0,
    currentPage: 1,
    limit: 10,
  });

  const refetch = useCallback(async (pageNo = 1, pageSize = 10) => {
    const res = await fetchUsers({ pageNo, noOfRecords: pageSize });
    setData(res.data);
    setPaginationInfo({
      totalRecords: res.pagination.totalRecords,
      currentPage: pageNo,
      limit: pageSize,
    });
  }, []);


  useEffect(() => {
    refetch(1, paginationInfo.limit);
  }, [refetch]);

  const userColumns: ColumnDef<User>[] = [
    { header: "UserId", accessorKey: "UserId" },
    { header: "Full Name", accessorKey: "FullName" },
    { header: "Status", accessorKey: "Status" },
    { header: "User Level", accessorKey: "UserLevel" },
    { header: "Phone Login", accessorKey: "PhoneLogin" },
    { header: "Live Status", accessorKey: "LiveStatus" },
    { header: "Group", accessorKey: "Group" },
  ];

  return (
    <div className="space-y-3">
      <DataTable
  columns={userColumns}
  data={data}
  pagination={{
    recordsToShow: [2, 5, 10, 25, 50],
    totalRecords: paginationInfo.totalRecords,
    currentPage: paginationInfo.currentPage,
    limit: paginationInfo.limit,
    onPageChange: refetch,
  }}
  onRowSelectionChange={(selectedRows) => {
    console.log("Selected Rows:", selectedRows);
  }}
/>

    </div>
  );
}
