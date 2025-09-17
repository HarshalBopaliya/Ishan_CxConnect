import { useState, useEffect } from "react";
import {type ColumnDef,flexRender,getCoreRowModel,getPaginationRowModel,getSortedRowModel,useReactTable,type RowSelectionState,} from "@tanstack/react-table";
import Checkbox from "../components/ui/checkbox";
// import {fetchUsers} from "../services/users.ts";

interface DataTableProps<Table> {
  columns: ColumnDef<Table>[];
  data: Table[];
  sorting: { enable: boolean };
  pagination: { recordsToShow: number[];
    enable: boolean;
    textToShow?: (to: string, from: string, total: number)=>void,
  };
  refetch: () => void;
  enableSelection?: boolean;
}

function DataTable<Table>({
  columns,
  data,
  sorting,
  pagination,
  enableSelection = true,
}: DataTableProps<Table>) {
 
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: pagination.recordsToShow[1] || 10,
  });


  useEffect(() => {
    if (pagination.textToShow && pagination.enable) {
      const start = paginationState.pageIndex * paginationState.pageSize + 1;
      const end = Math.min((paginationState.pageIndex + 1) * paginationState.pageSize, data.length);
      pagination.textToShow(end.toString(), start.toString(), data.length);
    }
  }, [paginationState, data.length, pagination]);

  const table = useReactTable({
    data,
    columns: enableSelection
      ? [
          {
            id: "select",
            header: ({ table }) => (
              <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onChange={(checked) => table.toggleAllPageRowsSelected(checked)}  
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            ),
          },
          ...columns,
        ]
      : columns,
    state: { rowSelection, pagination: paginationState },
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationState,
    getCoreRowModel: getCoreRowModel(),
    ...(sorting.enable && { getSortedRowModel: getSortedRowModel() }),
    ...(pagination.enable && { getPaginationRowModel: getPaginationRowModel() }),
  });


  return (
    <div>
       <div className="flex items-center gap-2">
            <label>Show</label>
            <select
              value={paginationState.pageSize}
              onChange={(e) =>
                setPaginationState({ ...paginationState, pageSize: Number(e.target.value), pageIndex: 0 })
              }
              className="border rounded px-2 py-1"
            >
              {pagination.recordsToShow.map((size) => (
                <option key={size} value={size}>
                  {  size  }
                </option>
              ))}
            </select>
            <label>entries</label>
          </div>
          <br/>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => (
                <th
                  key={header.id}
                  className={`border px-3 py-2 text-left ${
                    sorting.enable && header.column.getCanSort() ? "cursor-pointer hover:bg-gray-200" : ""
                  }`}
                  onClick={
                    sorting.enable && header.column.getCanSort()
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                >
                  <div className="flex items-center gap-2">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {sorting.enable && header.column.getCanSort() && (
                      <span className="text-gray-400 text-xs">
                        {header.column.getIsSorted() === "desc"
                          ? "↓"
                          : header.column.getIsSorted() === "asc"
                          ? "↑"
                          : "↕"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`${row.getIsSelected() ? "bg-blue-50" : ""} hover:bg-gray-50`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination.enable && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            Showing {paginationState.pageIndex * paginationState.pageSize + 1} to{" "}
            {Math.min((paginationState.pageIndex + 1) * paginationState.pageSize, data.length)} of{" "}
            {data.length} entries
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span>
              Page {paginationState.pageIndex + 1} of {table.getPageCount()}
            </span>

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

         
        </div>
      )}
    </div>
  );
}

export default DataTable;