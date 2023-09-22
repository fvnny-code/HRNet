import {Modal} from "./Modal"

export default {
title: "UI/Modal",
component: Modal,

}

export const myModal  =() => {
    return <div> Pouet pouet</div>
}

const Template =()=> (
    <Modal>
        <div className="backdrop">
      <div
        className="wrapper"
        aria-modal
        aria-labelledby="Confirmation"
        tabIndex={-1}
        role="doalog"
      >
        <div className="styledModal">
          <div className="header-modal">
            <button className="closeButton">
              X
            </button>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
    </Modal>
)
export const Default = Template.bind({})



