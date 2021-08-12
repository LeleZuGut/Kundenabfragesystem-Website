import React, { useState } from 'react';
import './FormLogin';
import FormLogin from './FormLogin';


const Form_Log = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  return (
    <>
      <div className='Login-form-container'>
        <div className='Login-form-content-left'>
          <img className='Login-form-img' src='./image/fertiges_logo.png' alt='' />
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