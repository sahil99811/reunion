import React, { useState } from "react";
import moment from "moment"; // Import moment.js
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addYears } from "date-fns";
import ReactSlider from "react-slider";
import "rc-slider/assets/index.css"; // Import slider styles

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="p-4 max-w-xs border border-gray-300 rounded-lg">
      <label htmlFor="created-at" className="font-bold block mb-2">
        Created At
      </label>
      <DatePicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline // To display calendar inline
        dateFormat="dd-MMM-yy"
        maxDate={new Date()} // Limit to today
        minDate={addYears(new Date(), -10)} // Allow dates within the last 10 years
      />
      <button
        className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        onClick={() => {
          setStartDate(null);
          setEndDate(null);
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

const FilterOptions = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    category: "",
    subcategory: "",
    createdAtStart: "",
    createdAtEnd: "",
    updatedAtStart: "",
    updatedAtEnd: "",
    priceRange: [0, 1000], // Initial range for price filter
    salePriceRange: [0, 500], // Initial range for sale price filter
  });
  const [filteredItems, setFilteredItems] = useState([]); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePriceRangeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: value,
    }));
  };

  const handleSalePriceRangeChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      salePriceRange: value,
    }));
  };

  const handleApplyFilters = () => {
    const formattedFilters = {
      ...filters,
      createdAtStart: filters.createdAtStart
        ? moment(filters.createdAtStart).startOf("day").toISOString()
        : "",
      createdAtEnd: filters.createdAtEnd
        ? moment(filters.createdAtEnd).endOf("day").toISOString()
        : "",
      updatedAtStart: filters.updatedAtStart
        ? moment(filters.updatedAtStart).startOf("day").toISOString()
        : "",
      updatedAtEnd: filters.updatedAtEnd
        ? moment(filters.updatedAtEnd).endOf("day").toISOString()
        : "",
    };

    onApplyFilters(formattedFilters);
  };

  return (
    <div className="flex flex-col space-y-4 h-full">
      <h4 className="text-lg font-bold">Filter Options</h4>

      {/* Scrollable section */}
      <div
        className="flex flex-col space-y-4 overflow-y-auto max-h-[500px] no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Your filter inputs */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="id" className="font-medium">
            ID
          </label>
          <input
            type="text"
            name="id"
            placeholder="Filter"
            value={filters.id}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Add other input fields for name, category, etc. */}

        {/* Date Range Filter */}
        <DateRangePicker />

        {/* Price Range Filter */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium">Price Range</label>
          <div className="relative w-full h-1 bg-gray-300 mt-5">
            {/* Container for the slider track */}
            <ReactSlider
              className="absolute top-0 left-0 w-full h-full bg-blue-400" 
              thumbClassName="h-8 w-8 bg-blue-600 rounded-full cursor-grab absolute z-10" 
              trackClassName="bg-blue-600 h-full absolute" 
              min={0}
              max={200}
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
              minDistance={5} 
              pearling
              withTracks={true}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  className="h-8 w-8 bg-blue-600  rounded-full cursor-grab flex items-center justify-center"
                >
                  {state.valueNow}
                </div>
              )}
            />
          </div>
          
        </div>

        {/* Sale Price Range Filter */}
        <div className="flex flex-col space-y-1 mt-4">
       
          {/* Added margin-top for spacing */}
          <label className="font-medium">Sale Price Range</label>
          <div className="relative w-full h-1 bg-gray-300 mt-5">
      
            {/* Container for the slider track */}
            <ReactSlider
              className="absolute top-0 left-0 w-full h-full" // Set the slider to cover the entire area of the track
              thumbClassName="h-8 w-8 bg-blue-600 rounded-full cursor-grab absolute z-10" // Thumb styling
              trackClassName="bg-blue-600 h-full absolute" // Track styling
              min={0}
              max={200}
              value={filters.salePriceRange}
              onChange={handleSalePriceRangeChange}
              minDistance={5}
              pearling
              withTracks={true}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  className="h-8 w-8 bg-blue-600 rounded-full cursor-grab flex items-center justify-center"
                >
                  {state.valueNow}
                </div>
              )}
            />
          </div>
         
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="mt-4">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterOptions;
