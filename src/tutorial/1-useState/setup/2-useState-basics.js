import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    setText("Welldone Marco!");    //reason to use react = render new content without reloading the page
  }

  const handleClick2 = () => {
    if(text === "Random Title") {
      setText("React JS - Winter in London!");
    }else {
      setText("Random Title");
    }
  }
  return (
    <React.Fragment>
      <h3>useState basic example</h3>
      <h4>{text}</h4>
      <button className="btn" type="button" onClick={handleClick}> change title </button>
      <button className="btn" type="button" onClick={handleClick2}>change title on condition</button>
    </React.Fragment>


  )
};

export default UseStateBasics;
