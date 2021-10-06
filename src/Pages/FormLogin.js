import '../Styles/FormLogin.css';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import LoginContext from '../Contexts/LoginContext';
import AuthenticatedContext from '../Contexts/AuthenticatedContext';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';




const FormLogin = ({ submitForm }) => {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userarr, setuserarr] = useState([""]);
  const [error, seterror] = useState("");

  const { setrealuser } = useContext(LoginContext);
  const { setisAuthenticated } = useContext(AuthenticatedContext);

  const history = useHistory();

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    await axios.get("http://192.168.0.4/api/Customer/all"
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
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("password");

    for (let i = 0; i < userarr.length; i++) {

      if (userarr[i].email == useremail && userarr[i].password == userpassword) {

        setrealuser(userarr[i].email + ";" + userarr[i].password + ";" + userarr[i].id);
        Cookies.set('user', userarr[i].id, { expires: 1 });
        Cookies.set("email",userarr[i].email, {expires:1});
        Cookies.set("password",userarr[i].password, {expires:1});
        setisAuthenticated(true);
        history.push("/main");
      }
      else {
        seterror("Falsche Eingabe");
        e.preventDefault();

      }

    }

  }

  const handlebuttonregister = (e) => {
    setisAuthenticated(true);

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
          <span className='Login-form-input-login' onClick={handlebuttonregister}>
            Möchten Sie ein Konto erstellen? Zur Registrierung <a href='/'>hier</a>
          </span>
        </form>


      </div>

      : <p>Loading...</p>

  );
};

export default FormLogin
