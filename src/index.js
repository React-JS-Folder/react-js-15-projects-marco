import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  


//Create an amazon book cover 
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = "I love You to the Moon and Back";
  const author = "Amelia Hepworth";
  const img =  "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" 


  return (
    <article className="book">
      <img 
      src={img}
      alt="" 
      />
      <h1>{title}</h1>      { /* the { } are to return the value of the expression */ }
      <h4>{author.toUpperCase()}</h4>     { /* you can use string methods    author.toUpperCase() */}


    </article>
  );

};

ReactDom.render(<BookList />, document.getElementById("root"));
