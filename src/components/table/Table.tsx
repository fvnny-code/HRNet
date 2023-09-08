import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  
} from "react-table";

// import MOCK_DATA from "./MOCK_DATA 2.json";
import { COLUMNS } from "./Columns";
// import { GlobalFilter } from "./GlobalFilter";
import "./table.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

export const Table = () => {
  const data = useSelector((store:RootState) => store.employees);

  const columns = useMemo(() => COLUMNS, []);

  // const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    //@ts-ignore
    page,
    //@ts-ignore
    nextPage,
    //@ts-ignore
    previousPage,
    //@ts-ignore
    canNextPage,
    //@ts-ignore
    canPreviousPage,
    //@ts-ignore
    pageOptions,
    //@ts-ignore
    state,
    //@ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      //@ts-ignore
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setGlobalFilter(value);
  };

  //@ts-ignore
  const { pageIndex } = state;

  return (
    <>
      <div className="container">
        <input
          placeholder=" Search... "
          onChange={handleFilterInputChange}
          className="search-table"
        />
      </div>
      <div>
        <label htmlFor="number per page">
          Show
          <select >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : " "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container">
        <div className="flex-start">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>

        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn-pagination"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn-pagination"
        >
          Next
        </button>
      </div>
    </>
  );
};

// export default function Table({ cols, items }: Props) {

//   return (
//     <table>
//       <thead>
//         <tr>
//           {cols.map((col, index) => {
//             return <th key={index}>{col}</th>;
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {
//             items.map((item, index)=>{
//                 return <tr key={index}>
//                     {
//                         item.map((value, index)=>{
//                             return<td key={index}>{value}</td>
//                         })
//                     }

//               </tr>
//             })
//         }

//       </tbody>
//     </table>
//   );
// }

// interface Props {
//   cols: Array<string>;
//   items: Array<Array<string>>;
// }
