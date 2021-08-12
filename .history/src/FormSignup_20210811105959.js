import React from 'react';
import'./FormSignup.css';
import { useHistory } from 'react-router-dom';
import { ReCAPTCHA } from "react-google-recaptcha";




const FormSignup = ({ submitForm }) => {
  


  const history = useHistory();


  return (
    const reRef = useRef<ReCAPTCHA>();

    <div className='form-content-right'>
      <form action="" method=""  className='form' onSubmit={() => history.push("/main")}>
        <h1>
          Starten Sie noch heute mit uns! Erstellen Sie ihr Konto, 
          indem Sie die Informationen darunter ausfüllen
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            required = "Lele du brauchst des"
            >
            
          
            </input>
            
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            required
            
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            required
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            required
            
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Haben Sie bereits ein Konto? Login <a href='login'>hier</a>
        </span>

        <ReCAPTCHA sitekey={process.env.PublicKey}
         size="invisible"
         ref={reRef}/>
      </form>
    </div>
  );
};

export default FormSignup;