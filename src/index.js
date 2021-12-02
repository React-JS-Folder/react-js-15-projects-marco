import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  


const names = ['john', 'peter', 'susan'];
 
const newNames = names.map( (name) => {
  return <h1>{name} </h1>
});
function BookList() {
  return (
    <section className="booklist"> {newNames} </section>
  )
}


ReactDom.render(<BookList />, document.getElementById("root"));
