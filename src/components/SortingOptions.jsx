import React, { useState } from "react";

const SortingOptions = ({ onSort }) => {
  const [sortOptions, setSortOptions] = useState({});

  const handleSortOrderChange = (option, order) => {
    setSortOptions((prev) => ({
      ...prev,
      [option]: order,
    }));
  };

  const applySorting = () => {
    const sortingCriteria = Object.entries(sortOptions).map(([key, value]) => ({
      key,
      order: value,
    }));
    onSort(sortingCriteria);
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded shadow-md max-w-sm mx-auto space-y-4">
      <h4 className="text-xl font-semibold">Sorting Options</h4>
      {[
        "id",
        "name",
        "category",
        "subcategory",
        "createdAt",
        "updatedAt",
        "price",
        "salePrice",
      ].map((option) => (
        <div key={option} className="flex items-center justify-between">
          <span className="text-gray-700">{option}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => handleSortOrderChange(option, "asc")}
              className={`py-1 px-2 rounded ${
                sortOptions[option] === "asc"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Asc
            </button>
            <button
              onClick={() => handleSortOrderChange(option, "desc")}
              className={`py-1 px-2 rounded ${
                sortOptions[option] === "desc"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Desc
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <button
          onClick={applySorting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
        >
          Apply Sorting
        </button>
      </div>
    </div>
  );
};

export default SortingOptions;
