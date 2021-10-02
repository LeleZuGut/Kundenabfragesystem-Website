import React from "react";
import "./Styles/Modal.css";

function Modal({ setOpenModal, setStatus}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Sie müssen noch kurz die AGBS akueptieren?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => {
              setOpenModal(false);
              setStatus(true);
            }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
