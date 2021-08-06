import React from 'react';
import './FormSignup.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Sie sind angemeldet!</h1>
      <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;