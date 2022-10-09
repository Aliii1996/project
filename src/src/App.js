import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Network from './Network/Network';
import Login from './Login/Login';
import Register from './Register/Register';
import About from './About/About';
import jwtDecode from 'jwt-decode';


    

export default function App() {

  const [userData, setuserData] = useState(null)
   let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData();
    }
    
  }, [])
  

  function getUserData ()
  {
   let decodedToken = jwtDecode(localStorage.getItem('userToken'));
   setuserData(decodedToken);
  }

  useEffect(() => {
    
    console.log (userData)
  
  }, [userData])
  

  function logOut (){
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/Login');
  }
  function ProtectedRoute({children}) {

    if (!localStorage.getItem('userToken')) {

     return <Navigate to ='/login'/>

    }
    else

    {
      return children;
    }
  }

  return (
    <div>

      <Navbar userData = {userData} LogOut = {logOut}/>

      <div className='container'>

        <Routes>

        <Route path='/' element = {<Home/>} />

        <Route path='home' element = { <ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='movies' element = { <ProtectedRoute><Movies/></ProtectedRoute>} />
        <Route path='about' element = {<ProtectedRoute><About/></ProtectedRoute>} />
        <Route path='network' element = {<ProtectedRoute><Network/></ProtectedRoute>} />
        <Route path='login' element = {<Login getUserData={getUserData}/>} />
        <Route path='register' element = {<Register/>} />

        <Route path='*' element = {<h2>404</h2>} />

        </Routes>

      </div>
    </div>
  )
}
