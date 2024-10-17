import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {data} from '../data/sample-data'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
//   faSort,
//   faSortUp,
//   faSortDown,
// } from "@fortawesome/free-solid-svg-icons"; // Import icons
import "../styles/DataTable.css"; // CSS for styling

const DataTable = ({
  columnVisibility,
  setColumnVisibility,
  grouping,
  setGrouping,
  columns,
  sortingCriteria
}) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      grouping,
      columnVisibility,
      sorting: sortingCriteria
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGroupingChange: setGrouping,
    onColumnVisibilityChange: setColumnVisibility,
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  return (
    <div>
      {/* Grouping Dropdown */}
      {/* <div className="grouping-toggle">
        <select
          value={grouping[0] || ""}
          onChange={(e) => setGrouping(e.target.value ? [e.target.value] : [])}
        >
          <option value="">No Grouping</option>
          {columns.map((col) => (
            <option key={col.accessorKey} value={col.accessorKey}>
              Group by {col.header}
            </option>
          ))}
        </select>
      </div> */}
      <table className="styled-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="header-cell"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="data-row">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="data-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="w-8 h-8 text-xl font-bold text-red-700"
        >
          {"<<"}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="w-8 h-8 text-xl font-bold text-red-500"
        >
          {"<"}
        </button>
        <span className="text-orange-400 text-xl ">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>{" "}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="w-8 h-8 text-xl font-bold text-red-500"
        >
          {">"}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="w-8 h-8 text-xl font-bold text-red-700"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default DataTable;
