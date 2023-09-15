import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  TableInstance,

} from "react-table";

// import MOCK_DATA from "./MOCK_DATA 2.json";
import { COLUMNS } from "./Columns";
// import { GlobalFilter } from "./GlobalFilter";
import "./table.css";

import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Employee } from "../../types";

type TableTypeWorkaround<T extends Object> = TableInstance<T> & {
  gotoPage: (index: number) => void;
  headerGroups: {
    getSortByToggleProps:Function;

  }[];
  page: number;
  nextPage: number | null;
  previousPage: number | null;
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageOptions: object;
  pageCount: number;
  setPageSize: (pageSize: number) => void;
  setGlobalFilter: Function;

  state: {
    pageIndex: number;
    pageSize: number;
  };
};

export const Table = () => {
  const data = useSelector((store: RootState) => store.employees);

  const columns = useMemo(() => COLUMNS, []);

  // const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable<Employee>(
    {
      //@ts-ignore
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as TableTypeWorkaround<Employee>;

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setGlobalFilter(value);
  };

  const { pageIndex, pageSize } = state;

  return (
    <>
      <div className="container">
        <div className="flex-start">
          <label htmlFor="page size">
            {/* Show
          <select className="btn-pagination">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select> */}
            <select
              value={pageSize}
              style={{ width: "120px", margin: "0 0.2rem" }}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
        <input
          placeholder=" Search... "
          onChange={handleFilterInputChange}
          className="search-table"
        />
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
      <div className="container pagination">
        <div className="flex-start">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="flex-start">
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "80px", margin: "0 0.2rem" }}
              className="pagination"
            />
          </span>{" "}
          {/* <select
            value={pageSize}
            style={{ width: "100px", margin: "0 0.2rem" }}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </div>
        <button
          className="btn-pagination"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
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
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="btn-pagination"
        >
          {">>"}
        </button>{" "}
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
