import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../src/tutorial/11-react-router/pages/Home'
import About from '../src/tutorial/11-react-router/pages/About'
import Profile from '../src/tutorial/11-react-router/pages/Profile'
import ErrorPage from './tutorial/11-react-router/pages/ErrorPage'

function App() {
  return (
  
      <Router>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/profile" >Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<ErrorPage /> } />     {/*if a path doesn't exist it renders ErrorPage Component*/}
        </Routes>
        <div>
          <h6>Everything renders except the part that is inside &lt;Routes&gt; </h6>
        </div>
      </Router>
  );

}


export default App
