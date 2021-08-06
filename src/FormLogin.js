import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import'./FormLogin.css';

const FormLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
  
    return (
      <div className='Login-form-content-right'>
        <form onSubmit={handleSubmit} className='Login-form' noValidate>
          <h1>
            Melden Sie sich an oder man wird älter!
          </h1>
          
          <div className='Login-form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='Login-form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='Login-form-inputs'>
            <label className='Login-form-label'>Password</label>
            <input
              className='Login-form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          
          <button className='Login-form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='Login-form-input-login'>
            Möchten Sie ein Konto erstellen? Login <a href='/'>hier</a>
          </span>
        </form>
      </div>
    );
  };

export default FormLogin
