import React, { useState } from 'react';
import '../Styles/FormLogin.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const FormLogin = ({ submitForm }) => {
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [userarr, setuserarr] = useState([""]);


  const history = useHistory();

  const check_Data = async () => {

    if (userarr == "") {


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
    else {
        for (let index = 0; index < userarr.length; index++) {
         
          if (userarr[i].email == useremail && userarr[i].password == userpassword) {
            
             history.push("/main");
          }
          else
          {
            alert("falsch");
          }
          
        }
    }
  }


  return (
    <div className='Login-form-content-right'>
      <form className='Login-form'>
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

        <button className='Login-form-input-btn' type='submit' onSubmit="">
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
