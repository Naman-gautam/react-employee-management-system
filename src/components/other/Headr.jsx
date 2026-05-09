import React, { useEffect, useState } from 'react'

const Headr = ({data}) => {
  // console.log(data);
  function logOutUser(){
   localStorage.setItem('loggedInUser','');
   window.location.reload();
  }
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl'>Hello <br />,<span className='text-3xl font-semibold'>{data.firstname}👋</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg text-white rounded-md px-3 py-3'>Log Out</button>
    </div>
  )
}

export default Headr
