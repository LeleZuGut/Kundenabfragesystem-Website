import React, { useState, useEffect, useContext } from 'react';
import FormFragenKatalog from "./Pages/FormFragenkatalog";
import "./Styles/Modal.css";

function Modal({ setOpenModal, buttonfertig}) {

  const[status, setstatus]= useState();

  const handlechangecheckbox=(cb)=>{
  }
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
          <input type="checkbox" onClick={(e)=>setstatus(e.target.checked)}/>
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
            
            if(status == true)
            {
              setOpenModal(false);
              buttonfertig();
            }
            else
            {
              console.log(status)
              alert("lele");
            }            
              
              
            }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
