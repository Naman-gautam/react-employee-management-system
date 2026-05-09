import React, { createContext, useEffect, useState } from 'react'
import { getlocaStorage, setlocaStorage } from '../utils/localstorage'
 export const Authpov=createContext()
 
const Authcontext = ({children}) => { 

  const[userdata,setuserdata]=useState(null)
  // localStorage.clear();
 useEffect(() => {
  const data = localStorage.getItem("employee");

  if (!data) {
    setlocaStorage(); // only first time
  }
  const { employee, admin } = getlocaStorage();
  setuserdata({ employee, admin });
}, []);

  return (
    <div>
      <Authpov.Provider value={userdata}>
       {children}
      </Authpov.Provider>
    </div>
  )
}

export default Authcontext
