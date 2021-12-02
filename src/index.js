import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  


//Props - pass values from parent to child components 
 
function BookList() {
  const title = "I love You to the Moon and Back";
  const author = "Amelia Hepworth";
  const img =  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" 

  return (
    <section className="booklist">
      <Book img={img} title={title} author={author}/>  {/* You can pass only the props that you need */}
      <Book author={author}/>                          {/* You can pass only the props that you need */}
    </section>
  )
}

const Book = (props) => {

  return (
    <article className="book">
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <img src={props.img} alt=""/>
    </article>
  );

};





ReactDom.render(<BookList />, document.getElementById("root"));
