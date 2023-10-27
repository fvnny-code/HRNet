
// import { useEffect, useState } from "react";

// import SelectMaxEntries from "./SelectMaxEntries";
// import InputSearch from "./InputSearch";
// import EntriesCounter from "./EntriesCounter";
// import TablePagination from "./TablePagination";
// import Table from "./Table";

/**
 * import react-table component with included filters, sorting and pagination
 */

import "../../index.css"

export default function TableWrapper() {
  // const cols: Array<string> = [
  //   "First Name",
  //   "Last Name",
  //   "Start Date",
  //   "Date of Birth",
  //   "Street",
  //   "City",
  //   "State",
  //   "Zip Code",
  //   "Department",
  // ]
  // const [query, setQuery] = useState("");
  // const [maxEntries, setMaxEntries] = useState(10);
  // const [results, setResults] = useState(items.slice(0, 10));
  // const [resultLength, setResultLength] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   // filter results using the research query
  //   const filteredItems = items.filter((properties) =>
  //     properties.some((property) => property.includes(query))
  //   );
    // setResultLength(filteredItems.length);
    // Slice results using the max entries limit & the current page
    // const slicedItems = filteredItems.slice(
    //   maxEntries * currentPage - maxEntries,
    //   maxEntries * currentPage
    // );
    // setResults(slicedItems);
  
  
  // [query, maxEntries, currentPage]);

  return (
    <section>
      {/* <div className="container">
        <SelectMaxEntries setFunction={setMaxEntries} />
        <InputSearch setFunction={setQuery}/>
      </div> */}
      {/* <Table cols={cols} items={results} /> */}
      {/* <div className="container">
        <EntriesCounter
          resultLength={resultLength}
          maxEntries={maxEntries}
          currentPage={currentPage}
        />
        <TablePagination
          resultLength={resultLength}
          maxEntries={maxEntries}
          currentPage={currentPage} 
          setFunction={setCurrentPage}/>
      </div> */}


    </section>
  );
}

// interface Props {
//   id: string;
//   cols: Array<string>;
//   items: Array<Array<string>>;
// }
