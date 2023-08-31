import { SetStateAction } from "react";

import "./table.css";

export default function TablePagination({
  resultLength,
  maxEntries,
  currentPage,
  setFunction,
}: Props) {
  const handleNavigate = (destinationPage: number) => {
    setFunction(destinationPage);
  };

  return (
    <div className="flex-end">
      {// if current page is not 1 display "previous page" button
        currentPage !== 1 ? (
          <button className="btn-pagination"
            onClick={() => {
              handleNavigate(currentPage - 1);
            }}
          >
            Previous
          </button>
        ) : ( "" )
      }
      {// Create a button for each page
        [...Array(Math.floor(resultLength / maxEntries) + 1).keys()].map(page =>{
            return <button className="btn-pagination" onClick={()=> {handleNavigate(page + 1)}} >
                {page + 1}
            </button>
        })
      }
      {// if current page is not the last, display "next page" button
      currentPage !==Math.floor(resultLength / maxEntries) + 1 ?
      <button className="btn-pagination" onClick={()=> {handleNavigate(currentPage + 1)}}>
        Next
      </button>
        : ""
      }
    </div>
  );
}

interface Props {
  resultLength: number;
  maxEntries: number;
  currentPage: number;
  setFunction: React.Dispatch<SetStateAction<number>>;
}
