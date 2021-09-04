import '../Styles/FormLogin.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';
import AuthenticatedContext from '../Contexts/AuthenticatedContext';
import auth from '../Route/auth';




const FormLogin = ({ submitForm }) => {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userarr, setuserarr] = useState([""]);
  const[error,seterror] = useState("");

  const{setrealuser} = useContext(LoginContext);
  const{setisAuthenticated} = useContext(AuthenticatedContext);

  const history = useHistory();

  useEffect(() => {
    getData()
}, [])


  const getData = async () => {
    await axios.get("http://localhost:8080/api/Customer/all"
      , {
        auth: {
          username: "admin",
          password: "adminpassword"
        }
      })
      .then(result => {
        setuserarr(result.data);

      })
      .catch(error => {
        console.log(error)
      })
  }
  if (userarr == "") {

    getData();

  }
  else {
  }


  const check_Data = (e) => {


    for (let i = 0; i < userarr.length; i++) {

      if (userarr[i].email == useremail && userarr[i].password == userpassword) {

        setrealuser(userarr[i].email + ";" + userarr[i].password + ";"+ userarr[i].id);
        
        setisAuthenticated(true);
        history.push("/main");
      }
      else {
        seterror("Falsche Eingabe");
        e.preventDefault();

      }

    }

  }


  return (

    userarr.length != 1 ?

    <div className='Login-form-content-right'>
      <form className='Login-form' onSubmit={check_Data}>
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
            onChange={event => setuseremail(event.target.value)}
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
            onChange={event => setuserpassword(event.target.value)}
            required


          />
        </div>

        <button className='Login-form-input-btn' type='submit'>
          Sign up
        </button>
        <p className="errorvalidation">{error}</p>
        <span className='Login-form-input-login'>
          Möchten Sie ein Konto erstellen? Zur Registrierung <a href='/'>hier</a>
        </span>
      </form>


    </div>

:   <p>Loading...</p>

  );
};

export default FormLogin
