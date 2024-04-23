import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignInForm= ()=>
  {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/9a12affd-2dc5-4854-90f7-04e28b66f417/US-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg'
       alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm? 'Sign-In': 'Sign-Up'}</h1>
      { !isSignInForm&& <input type="text" placeholder='Full Name' className='my-2 p-4 w-full'/>}
        <input type="text" placeholder='Email Address' className='my-2 p-4 w-full'/>
        <input type='password' placeholder='Password' className='my-2 p-4 w-full'/>
        <button className='my-6 p-4 bg-red-700 w-full '>{isSignInForm ? "Sign-In" : "Sign-Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? 'New to FlixGPT? Sign-Up Now': 'Already Registered ? Sign-In Now'}</p>
      </form>
     

      
    </div>
    
  )
}

export default Login
