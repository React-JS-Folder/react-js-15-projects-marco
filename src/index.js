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


const Book = ({img, title, author}) => {      
  // attribute, eventHandler 
  // onClick,   onMouseOver 
  const clickHandler = () => {            //Create the function to assign it to the element as reference
    alert('hello world');
  };

  const functionTakingParameter = (author) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={ () => (console.log(title))}>
      <img src={img} alt="" />
      <h1 onClick={ () => console.log()}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler} >reference example</button>   {/*add the function name  = add function as reference */}
      <button type="button" onClick={ () => functionTakingParameter(author)}>function taking parameters</button>
    </article>
  )
}





ReactDom.render(<BookList />, document.getElementById("root"));
