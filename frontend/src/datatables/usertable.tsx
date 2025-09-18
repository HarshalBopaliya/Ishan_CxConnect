import { useState } from "react";
import DataTable from "../../components/tables";
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../../types/user-table";
import { DummyData } from "../../stores/dummydata";
import "../../components/ui/checkbox";

export default function UserTable() {
  const [data, setData] = useState<User[]>(DummyData);

  const handleStatusChange = (id: number, value: string) => {
    setData(prev =>
      prev.map(user =>
        user.UserId === id
          ? { ...user, Status: value }
          : user
      )
    );
  };

  const handleUserLevelChange = (id: number, value: string) => {
    setData(prev =>
      prev.map(user =>
        user.UserId === id
          ? { ...user, UserLevel: value }
          : user
      )
    );
  };

  const userColumns: ColumnDef<User>[] = [
    { header: "UserId", accessorKey: "UserId" },
    { header: "Full Name", accessorKey: "FullName" },
    {
      header: "Status",
      cell: ({ row }) => (
        <select
          value={row.original.Status}
          onChange={e => handleStatusChange(row.original.UserId, e.target.value)}
          className="border rounded px-1 py-0.5"
        >
          <option value="active">active</option>
          <option value="Inactive">Inactive</option>
        </select>
      ),
    },
    {
      header: "User Level",
      cell: ({ row }) => (
        <select
          value={row.original.UserLevel}
          onChange={e => handleUserLevelChange(row.original.UserId, e.target.value)}
          className="border rounded px-1 py-0.5"
        >
          <option value="admin">admin</option>
          <option value="agent">agent</option>
        </select>
      ),
    },
    { header: "Phone Login", accessorKey: "PhoneLogin" },
    { header: "Live Status", accessorKey: "LiveStatus" },
    { header: "Group", accessorKey: "Group" },
  ];

 const refetch=()=>{
  console.log("refetch data");
 }

  const handlePaginationText = (to: string, from: string, total: number) => {
    console.log(`Showing ${from} to ${to} of ${total} entries`);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
      </div>

      <DataTable
        columns={userColumns}
        data={data}
        sorting={{enable: true}}
        pagination={{
          recordsToShow: [2, 5, 10, 25, 50],
          enable: true,
          textToShow: handlePaginationText
        }}
        refetch={refetch}
      />
    </div>
  );
}