import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();
  const {username} = useParams();

  return <div>THIS IS THE PROFILE PAGE for {username}<button onClick={ () => { navigate("/about")}}> go to about page</button></div>

}

export default Profile
