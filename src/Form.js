import React, { useState } from 'react';
import './FormSignup.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='Logo.png' alt='' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;