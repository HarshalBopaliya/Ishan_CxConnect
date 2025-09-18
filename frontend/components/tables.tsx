import { useState, useEffect } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
  type RowSelectionState,
} from "@tanstack/react-table";

interface DataTableProps<Table> {
  columns: ColumnDef<Table>[];
  data: Table[];
  pagination: {
    recordsToShow: number[];
    totalRecords: number;
    currentPage: number;
    limit: number;
    onPageChange: (page: number, pageSize: number) => void;
  };
  onRowSelectionChange?: (selectedRows: Table[]) => void;
}

function DataTable<T>({
  columns,
  data,
  pagination,
  onRowSelectionChange,
}: DataTableProps<T>) {
  const { totalRecords, currentPage, limit, recordsToShow, onPageChange } = pagination;

  const [paginationState, setPaginationState] = useState({
    pageIndex: currentPage - 1,
    pageSize: limit,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  useEffect(() => {
    onPageChange(paginationState.pageIndex + 1, paginationState.pageSize);
  }, [paginationState, onPageChange]);

  const table = useReactTable({
    data,
    columns,
    state: { pagination: paginationState, sorting, rowSelection },
    onPaginationChange: setPaginationState,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(totalRecords / paginationState.pageSize),
  });

  useEffect(() => {
    if (onRowSelectionChange) {
      const selectedRows = table.getSelectedRowModel().flatRows.map((row) => row.original);
      onRowSelectionChange(selectedRows);
    }
  }, [rowSelection, table, onRowSelectionChange]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <label>Show</label>
        <select
          value={paginationState.pageSize}
          onChange={(event) =>
            setPaginationState({
              ...paginationState,
              pageSize: Number(event.target.value),
              pageIndex: 0,
            })
          }
          className="border rounded px-2 py-1"
        >
          {recordsToShow.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <label>entries</label>
      </div>

      <table className="min-w-full border mt-3">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
           
              <th className="border px-3 py-2">
                <input type="checkbox"
                  {...{
                    checked: table.getIsAllPageRowsSelected(),
                    onChange: table.getToggleAllPageRowsSelectedHandler(),
                  }}
                />
              </th>
              {group.headers.map((header) => {
                const canSort = header.column.getCanSort();
                const sortDir = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    onClick={
                      canSort ? header.column.getToggleSortingHandler() : undefined
                    }
                    className={`border px-3 py-2 text-left ${
                      canSort ? "cursor-pointer select-none hover:bg-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {canSort && (
                        <span className="text-gray-400 text-xs">
                          {sortDir === "asc"
                            ? "↑"
                            : sortDir === "desc"
                            ? "↓"
                            : "↕"}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="border px-3 py-2">
                <input
                  type="checkbox"
                  {...{
                    checked: row.getIsSelected(),
                    onChange: row.getToggleSelectedHandler(),
                  }}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div>
          Showing{" "}
          {paginationState.pageIndex * paginationState.pageSize + 1} to{" "}
          {Math.min(
            (paginationState.pageIndex + 1) * paginationState.pageSize,
            totalRecords
          )}{" "}
          of {totalRecords} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setPaginationState((p) => ({
                ...p,
                pageIndex: Math.max(p.pageIndex - 1, 0),
              }))
            }
            disabled={paginationState.pageIndex === 0}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {paginationState.pageIndex + 1} of{" "}
            {Math.ceil(totalRecords / paginationState.pageSize)}
          </span>
          <button
            onClick={() =>
              setPaginationState((page) => ({
                ...page,
                pageIndex: page.pageIndex + 1,
              }))
            }
            disabled={
              paginationState.pageIndex + 1 >=
              Math.ceil(totalRecords / paginationState.pageSize)
            }
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
