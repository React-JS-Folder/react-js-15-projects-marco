import React from 'react'

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
};

export default Book;
