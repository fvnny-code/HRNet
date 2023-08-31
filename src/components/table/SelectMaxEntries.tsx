import React from "react";
import { SetStateAction } from "react";

import './table.css'

/**
 * Limit number of entries in the table
 */
export default function SelectMaxEntries({setFunction}:Props){
    return(
        <div className="flex-start">
            <p>Show</p>
            <select className="select-entries" onChange={(event)=> {setFunction(parseInt(event.target.value))}}>
            <option value={10} selected>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            </select>
            <p>Entries</p>
        </div>
    )

}

interface Props {
    setFunction: React.Dispatch<SetStateAction<number>>
  }