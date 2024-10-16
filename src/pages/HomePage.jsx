import React, { useState, useMemo } from "react";
import { FaRegEye } from "react-icons/fa6";
import { BiSort } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import Popup from "../components/Popup";
import ViewColumn from "../components/ViewColumn";
import SortingOptions from "../components/SortingOptions";
import GroupingOptions from "../components/GroupingOptions";
import FilterOptions from "../components/FilterOptions";
import DataTable from "../components/DataTable";

export default function HomePage() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState (null);
  const [sortingCriteria, setSortingCriteria] = useState([]);
  const handleSort = (sortingCriteria) => {
    setSortingCriteria(sortingCriteria);
  };
   const columns = useMemo(
     () => [
       {
         accessorKey: "id",
         columnName: "ID",
         header: ({ column }) => (
           <span>
             ID
             {/* ID
            {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "name",
         columnName: "Name",
         header: ({ column }) => (
           <span>
             Name
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "category",
         columnName: "Category",
         header: ({ column }) => (
           <span>
             Category
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "subcategory",
         columnName: "Subcategory",
         header: ({ column }) => (
           <span>
             Subcategory
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "createdAt",
         columnName: "Created At",
         header: ({ column }) => (
           <span>
             Created At
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "updatedAt",
         columnName: "Updated At",
         header: ({ column }) => (
           <span>
             Updated At
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "price",
         columnName: "Price",
         header: ({ column }) => (
           <span>
             Price
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
       {
         accessorKey: "salePrice",
         columnName: "Sale Price",
         header: ({ column }) => (
           <span>
             Sale Price
             {/* {column.getIsSorted() === "asc" ? (
              <FontAwesomeIcon icon={faSortUp} className="sort-icon" />
            ) : column.getIsSorted() === "desc" ? (
              <FontAwesomeIcon icon={faSortDown} className="sort-icon" />
            ) : (
              <FontAwesomeIcon icon={faSort} className="sort-icon" />
            )} */}
           </span>
         ),
       },
     ],
     []
   );
   const [columnVisibility, setColumnVisibility] = useState({
     id: true,
     name: true,
     category: true,
     subcategory: true,
     createdAt: true,
     updatedAt: true,
     price: true,
     salePrice: true,
   });
   const [grouping, setGrouping] = useState([]);
  const handleOpenPopup = (content) => {
    setPopupContent(content);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setPopupContent(null);
  };

  return (
    <div className="relative flex flex-col">
      <nav className="p-4 flex justify-end gap-4">
        <div className="rounded-md h-8 border-grey border-2">
          <input
            type="search"
            placeholder="Search"
            className="mb-2 outline-none px-2"
          />
        </div>
        <button
          onClick={() =>
            handleOpenPopup(
              <ViewColumn
                columns={columns}
                columnVisibility={columnVisibility}
                setColumnVisibility={setColumnVisibility}
              />
            )
          }
        >
          <FaRegEye className="h-6 w-6" />
        </button>

        <button onClick={() => handleOpenPopup(<SortingOptions onSort={handleSort}/>)}>
          <BiSort className="h-6 w-6" />
        </button>
        <button
          onClick={() =>
            handleOpenPopup(
              <GroupingOptions grouping={grouping} setGrouping={setGrouping} />
            )
          }
        >
          <FaLayerGroup className="h-6 w-6" />
        </button>
        <button onClick={() => handleOpenPopup(<FilterOptions />)}>
          <IoFilterOutline className="h-6 w-6" />
        </button>
      </nav>

      <main>
        <DataTable
          grouping={grouping}
          setGrouping={setGrouping}
          columnVisibility={columnVisibility}
          setColumnVisibility={setColumnVisibility}
          columns={columns}
          sortingCriteria={sortingCriteria}
        />
      </main>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        {popupContent}
      </Popup>
    </div>
  );
}
