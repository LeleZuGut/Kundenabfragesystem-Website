import React, { useState } from 'react';
import './Pages/FormLogin';
import FormLogin from './Pages/FormLogin';
import Hauptlogo from './Images/fertiges_logo.png';


const Form_Log = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  return (
    <>
      <div className='Login-form-container'>
        <div className='Login-form-content-left'>
          <img className='Login-form-img' src={Hauptlogo} alt='' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          null
        )}
      </div>
    </>
  );
};

export default Form_Log;