import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const[email,setEmail]=useState(" ");
const[password,setPassword]=useState("");
  function submithandler(e){  
  
  e.preventDefault()
  handleLogin(email,password);
  setEmail(" ");
  setPassword(" ");
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form className='flex flex-col items-center justify-center ' onSubmit={submithandler}>
            <input value={email} onChange={(e)=>{
            setEmail(e.target.value);
            }}  required className=' text-white border-2 border-emerald-600 rounded-full px-4 py-3 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='enter your email here ' />
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} required className='text-white border-2 border-emerald-600 rounded-full px-4 py-3 text-xl outline-none bg-transparent mt-3 placeholder:text-gray-400' type="password" placeholder='enter your password' />
            <button  className='text-white mt-5 bg-emerald-600 rounded-full px-4 py-3 text-xl outline-none placeholder:text-white'>Login</button>
        </form> 

      </div>
    </div>
  )   
}

export default Login
