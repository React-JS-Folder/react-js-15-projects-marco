import React from 'react'
import { useState } from 'react'
import Form from './Components/Form'
import { Context1 } from './Contexts/UsernameContext';




export default function AppContext() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is AppContext</h1>
      <p>I added Form component</p>
      <p>I added Context API UsernameContext component</p>
      <h1>{count}</h1>
      <hr />
      <Context1.Provider value={{count, setCount}} >
        <Form />
      </Context1.Provider>
    </div>
  )
}
