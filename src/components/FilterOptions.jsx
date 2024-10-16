import React from "react";

const FilterOptions = () => (
  <div className="flex flex-col space-y-2">
    <h4>Filter Options</h4>
    {[
      "ID",
      "Name",
      "Category",
      "Subcategory",
      "Created At",
      "Updated At",
      "Price",
      "Sale Price",
    ].map((filter) => (
      <div key={filter}>
        <span>{filter}</span>
        <input type="text" placeholder="Filter" className="ml-2 border" />
      </div>
    ))}
    <div className="mt-4">
      <button className="bg-blue-500 text-white py-1 px-4 rounded">
        Apply Filters
      </button>
    </div>
  </div>
);

export default FilterOptions;
