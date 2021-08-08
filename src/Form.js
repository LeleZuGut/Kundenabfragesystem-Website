import React, { useState, Component } from 'react';
import './FormSignup.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormFragenKatalog-Main';




const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='fertiges_logo.png' alt='' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
            null
        )}
      </div>
    </>
  );
};

export default Form;