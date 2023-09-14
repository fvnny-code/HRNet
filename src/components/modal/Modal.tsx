import { FunctionComponent, useEffect } from "react";

import { createPortal } from "react-dom";

import "./modal.css";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  message: string;
 
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  message,

}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };
  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);
  const modal = (
    <div className="backdrop" onClick={hide}>
      <div
        className="wrapper"
        aria-modal
        aria-labelledby="Confirmation"
        tabIndex={-1}
        role="doalog"
      >
        <div className="styledModal">
          <div className="header-modal">
            <button className="closeButton" onClick={hide}>
              X
            </button>
          </div>
          <div className="content">{message}</div>
        </div>
      </div>
    </div>
  );
  return isShown ? createPortal(modal, document.body) : null;
};

// export default function Modal({message, visibility, setVisibility}:Props){

//     return(
//         <div className= {!visibility ? "modal-hidden" : "modal"}>

//                 <button className="btn-modal " onClick={()=> (setVisibility(false))}>
//                 X
//                 </button>
//                 <p className=" message-modal">{message}</p>

//         </div>
//     )

// }

// interface Props {
//     message: string,
//     visibility: boolean
//     setVisibility: React.Dispatch<SetStateAction<boolean>>
//   }
