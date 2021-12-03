import React from 'react'
import ReactDom from 'react-dom'
import './index.css'  

const books = [
  {
    id: 1,  //this is to create a key (react needs to register each map element)
    img: 
    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,  //this is to create a key (react needs to register each map element)
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
        return (
          <Book key={book.id} {...book} />       //using spread operator to pull all the variables             
        )
      })}
     
    </section>
  );
}


const Book = ({img, title, author}) => {       //you can pull the variables instead of props directly
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}





ReactDom.render(<BookList />, document.getElementById("root"));
