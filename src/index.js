import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  

const books = [
  {
    img: 
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    img: 
      'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen'
  }
];

function BookList(){
  return(
    <section className="booklist">
      {books.map( (book) => {
        const {img, title, author} = book;
        return (
          <Book title={title} author={author} />
        )
      })}
     
    </section>
  );
}


const Book = (props) => {
  const {img, title, author} = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}





ReactDom.render(<BookList />, document.getElementById("root"));
