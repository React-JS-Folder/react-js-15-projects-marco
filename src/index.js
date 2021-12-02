import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  

const firstBook = {
  title: "I love You to the Moon and Back",
  author: "Amelia Hepworth",
  img:  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" 
}
const secondBook = {
  title: "Our Class is a Family",
  author: "Shannon Olsen",
  img:  "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg" 
}


//Props - pass values from parent to child components 
 
function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />

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
