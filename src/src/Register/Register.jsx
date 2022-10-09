import axios from 'axios';
import Joi from 'joi';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 
export default function Register () {


  
const [errorList, setErrorlist] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate(); 
const [error, setError] = useState('');
const [user, setuser] = useState({
  first_name: '',
  last_name:'',
  age:0,
  email:'',
  password:''
 })


 function getuser (e){
    let myuser = {...user};
    myuser[e.target.name] = e.target.value ;
    setuser(myuser);
   
 }

  async function submitRegister(e) {
    e.preventDefault();
    setIsLoading (true);

    let validateresult = validateRegister (user)


    if (validateresult.error) {
      setIsLoading (false);

      setErrorlist (validateresult.error.details)

    
    
    }
    else {

        
   let {data} = await axios.post ('https://routeegypt.herokuapp.com/signup',user)

    
   if (data.message === 'success') {
    
    setIsLoading (false);
    navigate("/Login");
   }
   else {

    setError (data.message);
    setIsLoading (false);
   }
  }
    }

  
  function validateRegister (user) {
    let schema = Joi.object({
      first_name:Joi.string().alphanum().min(3).max(8).required(),
      last_name:Joi.string().alphanum().min(3).max(8).required(),
      age:Joi.number().min(16).max(80).required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password:Joi.string()
    });
    return schema.validate(user , {abortEarly:false});
  }

  return (
    <div>

      <h2 className='my-3'>Register Now</h2>

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
      <form onSubmit={submitRegister} >
        <label htmlFor="first_name">first-name :</label>
        <input onChange={getuser} type="text" className='form-control my-3' name="first_name" id="first_name" />

        <label htmlFor="last_name">last-name :</label>
        <input onChange={getuser} type="text" className='form-control my-3' name="last_name" id="last_name" />

        <label htmlFor="age">age :</label>
        <input onChange={getuser} type="number" className='form-control my-3' name="age" id="age" />

        <label htmlFor="email">email :</label>
        <input onChange={getuser} type="email" className='form-control my-3' name="email" id="email" />

        <label htmlFor="password">password :</label>
        <input onChange={getuser} type="password" className='form-control my-3' name="password" id="password" />

        <button className='btn btn-outline-info'>
          {isLoading? <i className='fas fa-spinner fa-spin'></i>:'Regiser'}
        </button>
        
      </form>
    </div>
  )
}
