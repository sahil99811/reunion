import React, { useState } from "react";

const ViewColumn = ({ columns, columnVisibility, setColumnVisibility }) => {
  const [newcolumnVisibility, setnewColumnVisibility] = useState({
    id: true,
    name: true,
    category: true,
    subcategory: true,
    createdAt: true,
    updatedAt: true,
    price: true,
    salePrice: true,
  });
  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-50 rounded-md shadow-lg w-full max-w-lg">
      <h4 className="text-lg font-semibold text-gray-800">Show/Hide Columns</h4>
      <div className="column-toggled flex flex-col gap-2 mt-2">
        {columns.map((col) => (
          <label key={col.accessorKey} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={newcolumnVisibility[col.accessorKey] ? true : false}
              onChange={() =>
                setnewColumnVisibility((old) => ({
                  ...old,
                  [col.accessorKey]: !old[col.accessorKey],
                }))
              }
            />
            <span className="text-gray-700">{col.columnName}</span>
          </label>
        ))}
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow"
         onClick={()=>{
          setColumnVisibility({
            id: true,
            name: true,
            category: true,
            subcategory: true,
            createdAt: true,
            updatedAt: true,
            price: true,
            salePrice: true,
          });
         }}>
          Show All Columns
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
        onClick={()=>{
          setColumnVisibility(newcolumnVisibility)
        }}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default ViewColumn;
