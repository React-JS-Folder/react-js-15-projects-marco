import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');         //falsy value  (empty string)
  const firstValue = text || 'hello world';     //it will be a value or other value
  const secondValue = text && 'hello world';    //it will a value + other value

  return (
    <>
      <h1>{text || 'john doe'}</h1>      {/*it will print out the variable if truthy or the string if falsy */} 
      {text && <h1>hello world</h1>}     {/*it will print out the variable if truthy and the ......} */}
      {!text && <h1>hello world</h1>}    {/* if variable is falsy it will print out the <h1>..</h1>} */}
   </>
  )

};

export default ShortCircuit;
