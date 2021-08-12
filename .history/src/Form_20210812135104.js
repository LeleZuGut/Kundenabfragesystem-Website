import React, { useState } from 'react';
import './FormSignup.css';
import FormSignup from './FormSignup';
import Hauptlogo from './Images/fertiges_logo.png';




const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  


  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={Hauptlogo} alt='' />
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