import React from "react";

const GroupingOptions = ({grouping,setGrouping}) => (
  <div className="flex flex-col space-y-2">
    <h4>Grouping Options</h4>
    <select className="border">
      <option>Select A Column</option>
      <option>ID</option>
      <option>Name</option>
      <option>Category</option>
      <option>Subcategory</option>
    </select>
    <div className="mt-4">
      <button className="bg-red-500 text-white py-1 px-4 rounded">
        Clear Grouping
      </button>
      <button className="ml-2 bg-green-500 text-white py-1 px-4 rounded">
        Apply Grouping
      </button>
    </div>
  </div>
);

export default GroupingOptions;
