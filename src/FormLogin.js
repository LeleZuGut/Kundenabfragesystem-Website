import React from 'react';
import './FormLogin.css';
import { useHistory } from 'react-router-dom';


const FormLogin = ({ submitForm }) => {


  const history = useHistory();
  return (
    <div className='Login-form-content-right'>
      <form className='Login-form' onSubmit={() => history.push("/main")}>
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
            required

          />
        </div>
        <div className='Login-form-inputs'>
          <label className='Login-form-label'>Password</label>
          <input
            className='Login-form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            required
            

          />
        </div>

        <button className='Login-form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='Login-form-input-login'>
          Möchten Sie ein Konto erstellen? Zur Registrierung <a href='/'>hier</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin
