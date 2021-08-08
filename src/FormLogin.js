import React from 'react';
import'./FormLogin.css';
import Login_useForm from './Login_useForm';
import LoginvalidateInfo from './LoginvalidateInfo';
import { useHistory } from 'react-router-dom';


const FormLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = Login_useForm(
      submitForm,
      LoginvalidateInfo
    );

    const history = useHistory();
  
    return (
      <div className='Login-form-content-right'>
        <form onSubmit={handleSubmit} className='Login-form' noValidate onSubmit={() => history.push("/main")}>
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
          
          <button className='Login-form-input-btn' type='submit' onClick= {()=>history.push('/main')}>
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
