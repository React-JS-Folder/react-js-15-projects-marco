import React, { useState, useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

function Login() {
//   const {username, setUsername, setShowProfile} = useContext(LoginContext);
  const {username, setUsername, setShowProfile} = useContext(LoginContext);
   return (
       <>
         <input
            type="text"
            placeholder="Username..."
            onChange={(event) => {
               setUsername(event.target.value);
             }}
          />
          <input type="text" placeholder="Password..." />

          {/* <button onClick={() => {setShowProfile(true)}}>LOGIN</button> */}
          <button onClick={() => {(username && setShowProfile(true))}}>LOGIN</button>
       </>
      );
};
          
export default Login