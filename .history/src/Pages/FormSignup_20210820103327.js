import React from 'react';
import '../Styles/FormSignup.css';
import { useHistory } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';






const FormSignup = ({ submitForm }) => {



  function onSubmitChange() {
    let Userob = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").nodeValue,
      password: document.getElementById("password").nodeValue
    }

    console.log("object", Userob);
  }

  const history = useHistory();

  function recaptchaloaded() {
    console.log('capcha succesfully loaded');

  }


  return (

    <div className='form-content-right'>
      <form action="" method="" className='form' onSubmit={() => history.push("/main")}>
        <h1>
          Starten Sie noch heute mit uns! Erstellen Sie ihr Konto,
          indem Sie die Informationen darunter ausfüllen
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            id="username"
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            required="Lele du brauchst des"
          >


          </input>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            id="email"
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
            id="password"
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
        <button className='form-input-btn' type='submit' onClick= {onSubmitChange}>
          Sign up
        </button>
        <span className='form-input-login'>
          Haben Sie bereits ein Konto? Login <a href='login'>hier</a>
        </span>
        <br>
        </br>
        <br>
        </br>

        <div className="recaptcha" required>
          <Recaptcha
            required
            sitekey="6LegDPMbAAAAANZWpLaRCJ1dgTG9wC2bplGQz9xy"
            render="explicit"
            onloadCallback={recaptchaloaded}
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignup;