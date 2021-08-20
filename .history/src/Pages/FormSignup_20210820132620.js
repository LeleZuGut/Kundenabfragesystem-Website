import React, { useState } from 'react';
import '../Styles/FormSignup.css';
import { useHistory } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';






const FormSignup = ({ submitForm }) => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState("");





  function onSubmitChange() {
    let Userob = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    }

    let password2 = document.getElementById("password2").value;
    if (Userob.username == "" || Userob.email == "" || Userob.password == "" || password2 == "" || Userob.password != password2) {
      alert("nicht speichern");
    }
    else {
      alert("speichern");
    }

    console.log("object", Userob);
  }

  const checkValidation = (e) => {
    setConfirmpassword(e.target.value);
    if (password != confirmpassword) {
      setError("Bitte das richtige Passwort bestätigen");
    }
    else {
      setError("");
    }
  }
  const history = useHistory();

  const submitHandler = (e) => {

    console.log("captcha", captcha);
    if (error == "" & captcha == "wurde geklickt") {
      history.push("/main");

    } else {
      e.preventDefault();
      alert("warte bis ois bast");
    }
  }


  function recaptchaloaded() {
    console.log('capcha succesfully loaded');

  }


  return (

    <div className='form-content-right'>
      <form action="" method="" className='form' onSubmit={submitHandler}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}


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
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            id="password2"
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            required
            value={confirmpassword}
            onChange={checkValidation}


          />

          <p>{error}</p>
        </div>
        <button className='form-input-btn' type='submit' onClick={onSubmitChange}>
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
            verifyCallback= {(e) => setCaptcha("wurde geklickt")}
            
          />
        </div>
        <p>{captcha}</p>
      </form>
    </div>
  );
};

export default FormSignup;