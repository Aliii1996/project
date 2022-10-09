import axios from 'axios';
import Joi from 'joi';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 
export default function Login (props) {


  
const [errorList, setErrorlist] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate(); 
const [error, setError] = useState('')
const [user, setuser] = useState({
  
  email:'',
  password:''
 })


 function getuser (e){
    let myuser = {...user};
    myuser[e.target.name] = e.target.value ;
    setuser(myuser);
   
 }

  async function submitLogin(e) {
    e.preventDefault();
    setIsLoading (true);

    let validateresult = validateLogin (user)


    if (validateresult.error) {
      setIsLoading (false);

      setErrorlist (validateresult.error.details)

    
    
    }
    else {

        
   let {data} = await axios.post ('https://routeegypt.herokuapp.com/signin',user)

    
   if (data.message === 'success') {
    localStorage.setItem('userToken', data.token);
    setIsLoading (false);
    props.getUserData();
    navigate("/Home");
   }
   else {

    setError (data.message);
    setIsLoading (false);
   }
  }
    }

  
  function validateLogin (user) {
    let schema = Joi.object({
      
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password:Joi.string()
    });
    return schema.validate(user , {abortEarly:false});
  }

  return (
    <div>

      <h2 className='my-3'>Login Now</h2>

    {errorList.map((error , index)=>  {


      if (index === 4) {

        return <div key={index} className='alert alert-danger'>Password Invalid</div>
      }

      else {

        return <div key={index} className='alert alert-danger'>{error.message}</div>
      }
    }
    
    
          )}


      {error?<div className='alert alert-danger'>{error}</div>: '' }
      {}
      <form onSubmit={submitLogin} >
       
        <label htmlFor="email">email :</label>
        <input onChange={getuser} type="email" className='form-control my-3' name="email" id="email" />

        <label htmlFor="password">password :</label>
        <input onChange={getuser} type="password" className='form-control my-3' name="password" id="password" />

        <button className='btn btn-outline-info'>
          {isLoading? <i className='fas fa-spinner fa-spin'></i>:'Login'}
        </button>

        
        
      </form>
    </div>
  )
}
