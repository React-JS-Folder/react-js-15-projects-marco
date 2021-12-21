import React, { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { LoginContext } from './Contexts/LoginContext'


function AppContext() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");


  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
          {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
      {/* <h1>This is AppContext</h1> */}
    </div>
  );
};

export default AppContext


