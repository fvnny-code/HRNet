import { SetStateAction } from "react";
import "./table.css"

export default function InputSearch({setFunction}:Props){
    return(
        <div className="flex-end">
            <p>Search : </p>
           <input type="search" name="tableSearchInput"
           onChange={(event)=>{setFunction(event.target.value)}}
           className="search-table"
           >
           </input>
        </div>
    )
}

interface Props {
    setFunction: React.Dispatch<SetStateAction<string>>
  }