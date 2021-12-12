// Get data from object and use it, spread variables using a useState()
import React from 'react'
import {useState} from 'react'
// import {data} from '../../../data'

// const UseStateArray2 = () => {
//   const [people, setPeople] = React.useState(data);   //data is an object, now people is an object

//   const removeItem = (id) => {
//     let newPeople = people.filter( (person) =>    person.id !== id);
//     setPeople(newPeople);
    
//   };

// ###############################################
// testing filter()
// console.log("testing filter");
// console.log("--------------------------------------");
// const arrNumbers = [1,2,3,4,5];

// const someNumbers = arrNumbers.filter( (eachNumber) => eachNumber !== 3);
// console.log(someNumbers);

// console.log("--------------------------------------");
// console.log("--------------------------------------");
// ###############################################

//   return (
//     <>
//       {people.map( (person) => {
//         const {id, name} = person;
//         return (
//           <div key={id} className="item">
//             <h4>{name}</h4>
//             <button type="button" onClick={ () => removeItem(id)}>
//               remove item
//             </button>
//           </div>
//         )
//       })}
//     </>

//   );
// };

// export default UseStateArray2;
// ###############################################
// Create list with an object and delete the list items onClick 


const data =[
  {id: 1, name: 'will'},
  {id: 2, name: 'wulk'},
  {id: 3, name: 'Wezep'}
]



export default function FilterObject() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter( (person) => person.id !== id);
    setPeople(newPeople);
  }

  return( 
    <>
      {people.map( (person) => {
        const {id, name} = person;
        return( 
          <div key={id} style={{display: 'flex', justifyContent: 'space-between', margin: "20px", backgroundColor: '#ccc'}}>
            <h3>{name}</h3>
            <button type="button" onClick={() => removeItem(id)}>remove item</button>
          </div>
        )
      })}
    </>
  )

}
// ###############################################


