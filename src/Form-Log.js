import React, { useState } from 'react';
import './FormLogin';
import FormLogin from './FormLogin';
import FormSuccess from './FormSuccess';

const Form_Log = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  
  return (
    <>
      <div className='Login-form-container'>
        <div className='Login-form-content-left'>
          <img className='Login-form-img' src='Logo.png' alt='' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form_Log;