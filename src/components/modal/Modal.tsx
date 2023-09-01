import { SetStateAction } from "react";
import "./modal.css"

export default function Modal({message, visibility, setVisibility}:Props){

    return(
        <div className= {!visibility ? "modal-hidden" : "modal"}>
          
                <button className="btn-modal " onClick={()=> (setVisibility(false))}>
                X
                </button>
                <p className=" message-modal">{message}</p>
                
        </div>
    )

}

interface Props {
    message: string,
    visibility: boolean
    setVisibility: React.Dispatch<SetStateAction<boolean>>
  }