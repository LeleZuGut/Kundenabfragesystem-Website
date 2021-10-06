import React from "react";
import FormFragenKatalog from "./Pages/FormFragenkatalog";
import "./Styles/Modal.css";

function Modal({ setOpenModal, buttonfertig}) {
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
          <h1>Bevor Sie beenden, bitte noch diese Informationen bestätigen?</h1>
        </div>
        <div className="body">
          <input type="checkbox"/>
          <label>Ich akzeptiere die AGB´s</label>

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
              buttonfertig();
              
            }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
