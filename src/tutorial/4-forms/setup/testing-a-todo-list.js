import React from 'react'

export default function MarcoTodoList() {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState([]);

  const addItemToList = (e) => {
      e.preventDefault();
      const person = {user, email};
      setPeople( (people) => {
        return [...people, person];
      });
      console.log(people);
      setUser("");
      setEmail("");
  }
  return (
    <>
      <article>
        <form className="form">
          <label>User : </label>
          <input 
            type="text" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
          />
          <br/>
          <label>Email : </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
           />
          <br/>

          <button className="btn" type="submit" onClick={(e)=> addItemToList(e)}>send form</button>
        </form>
        {people.map( (person) => {
          const {user,email} = person;
          return (
            <div className="item">
              <h4>{user}</h4>
              <p>{email}</p>
            </div>
          )
          
        })}

      </article>


    </>
  )
}
