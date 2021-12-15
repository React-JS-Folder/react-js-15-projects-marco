import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');         //falsy value  (empty string)
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'john doe'}</h1>      {/*it will print out the variable if truthy or the string if falsy */} 
      <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>

      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error</p> : 
      <div>
        <h2>There is no error</h2>
        </div>}
   </>
  )

};

export default ShortCircuit;
