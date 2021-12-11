// ################################################################
// useState for an object 
// import React, { useState } from 'react';

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'peter',
//     age: 24,
//     message: 'random message'
//   })

//   const changeMessage = () => {
//     setPerson( {...person, message: 'hello world'})      //spread the object, property:'value'
//   }

//   console.log(person);
//   return <>
//     <h3>{person.name}</h3>       { /*make reference to the object.property */ }
//     <h3>{person.age}</h3>
//     <h3>{person.message}</h3>
//     <button className="btn" onClick={changeMessage}>change message</button>
//   </>
// };

// export default UseStateObject;

// ################################################################
// useState for each variable 
import React, { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState("sonic");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("sonic is back");

  const changeMessage = () => {
    setMessage('hello world');
  }

  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>change message</button>
  </>
};

export default UseStateObject;
