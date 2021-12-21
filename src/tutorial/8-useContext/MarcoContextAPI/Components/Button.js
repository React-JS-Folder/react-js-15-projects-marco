import React from 'react'
import { useContext, useEffect } from 'react'
import { Context1 } from '../Contexts/UsernameContext';


export default function Button() {
  const {count, setCount} = useContext(Context1);
  // useEffect( () => {
  //   const increase = () => setCount(count + 1);
  // })


  // return <button onClick={increase}>Increase Count</button>
  return <button onClick= {() => {setCount(count + 1)}}>Increase Count</button>

}
