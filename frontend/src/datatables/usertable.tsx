import { useState } from "react";
import DataTable from "../../components/tables";
import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../../types/user-table";
import { DummyData } from "../../stores/dummydata";

export default function UserTable() {
  const [data, setData] = useState<User[]>(DummyData);
  const [pageSize, setPageSize] = useState<number>(5);

  const handleStatusChange = (id: number, value: string) => {
    setData(prev =>
      prev.map(user =>
        user.UserId === id
          ? { ...user, Status: { currentStatus: value } }
          : user
      )
    );
  };

  const handleRoleChange = (id: number, value: string) => {
    setData(prev =>
      prev.map(user =>
        user.UserId === id
          ? { ...user, UserLevel: { role: value } }
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
          value={row.original.Status.currentStatus}
          onChange={e => handleStatusChange(row.original.UserId, e.target.value)}
          className="border rounded px-1 py-0.5"
        >
          <option value="active">active</option>
          <option value="Inactive">Inactive</option>
        </select>
      ),
    },
    {
      header: "Role",
      cell: ({ row }) => (
        <select
          value={row.original.UserLevel.role}
          onChange={e => handleRoleChange(row.original.UserId, e.target.value)}
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

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <label htmlFor="entries" className="font-medium">
          Show&nbsp;
        </label>
        <select
          id="entries"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[2, 5, 10, 25, 50].map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>&nbsp;entries</span>
      </div>

      <DataTable
        columns={userColumns}
        data={data}
        pageSize={pageSize}
        enableSorting
        enablePagination
      />
    </div>
  );
}
