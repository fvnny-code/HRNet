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
    getSortByToggleProps: Function;
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
          <label htmlFor="pageSize">
            <select
            id="pageSize"
              value={pageSize}
              className="select-pagination"
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
                <th
                  {
                    //@ts-ignore
                    ...column.getHeaderProps(column.getSortByToggleProps())
                  }
                >
                  {column.render("Header")}
                  <span>
                    {
                      //@ts-ignore
                      column.isSorted
                        ? //@ts-ignore
                          column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : " "
                    }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            //@ts-ignore
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    //@ts-ignore
                    row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="container pagination">
        <div className="flex-start">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of{" "}
              {
                //@ts-ignore
                pageOptions.length
              }
            </strong>{" "}
          </span>
          <label htmlFor="goToPage" className="flex-start">
            Go to page:{" "}
            <input
            id="goToPage"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              className="input-pagination pagination"
            />
          </label>{" "}
        </div>
        <button
          className="btn-pagination"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          onClick={() => {
            //@ts-ignore
            previousPage();
          }}
          disabled={!canPreviousPage}
          className="btn-pagination"
        >
          Previous
        </button>
        <button
          onClick={() => {
            //@ts-ignore
            nextPage();
          }}
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
