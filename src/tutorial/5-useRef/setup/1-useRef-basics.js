import React, { useEffect, useRef } from 'react'
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// form elements 
// const refInput = useRef(nul);
// refInput.current.value            //gets the value of form element
// refInput.current.focus()          //get the form element with the cursor, ready to type

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);           //form elements to get VALUE
  }

  useEffect( () => {
      console.log(divContainer.current);               //any DOM element CONTENT (no only text)
      refContainer.current.focus();    
  })


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type="submit"> submit </button>
        </div>
      </form>
      <div ref={divContainer}>The article has been sold </div>
    </>
  )
}

export default UseRefBasics