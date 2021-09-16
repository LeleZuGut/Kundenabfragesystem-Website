import React, { useState,useEffect,useContext} from 'react';
import axios from 'axios';
import '../Styles/FormSignup.css';
import { useHistory } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import AuthenticatedContext from '../Contexts/AuthenticatedContext';
import LoginContext from '../Contexts/LoginContext';
import { Switch } from '@material-ui/core';
import Cookies from 'js-cookie';








const FormSignup = ({ submitForm }) => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState("");
  const{setisAuthenticated} = useContext(AuthenticatedContext);
  const{setrealuser} = useContext(LoginContext);








  function onSubmitChange() {



    if (captcha == " ") {
      setCaptcha(" ");

    } else {
      setCaptcha("Bitte das auch noch bestätigen");


    }



  }

  const checkValidation = (e) => {
    setConfirmpassword(e.target.value);
    if (password !== e.target.value) {
      setError("Bitte das richtige Passwort bestätigen");
    }
    else {
      setError("");
    }
  }
  const history = useHistory();

  

  const postData = async() =>{
    let user = {
      Email: email,
      Name: username,
      Password: password
    }
    console.log("User", user);
    await axios.post('http://192.168.0.45/api/Customer/insert', user,{
      auth:{
        username:"admin",
        password:"adminpassword"
      }
    })
    
    .then(response => {
    })
    .catch(error => {
    })

  }
  

  const submitHandler = (e) => {
    setisAuthenticated(false);
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("password");



    if (error == "" & captcha == " ") {
      

      if (username == "" || email == "" || password == "" || confirmpassword == "" || password != confirmpassword) {


      } else {
        Cookies.set("user","yallah",{expires:1});
        Cookies.set("email",email, {expires:1});
        Cookies.set("password",password, {expires:1});

        const setvalidation = async() =>{
          await postData();
          setisAuthenticated(true);

          history.push("/main");

        }

        setvalidation();
      }

     
      setrealuser(email + ";" + password);
      history.push("/main");
    } else {
      e.preventDefault();
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
            verifyCallback={(e) => setCaptcha(" ")}

          />
        </div>

        <p className="errorvalidation">{captcha}</p>
      </form>

      <div>
    </div>

      
    </div>
  );
};

export default FormSignup;