import React from 'react'
import ReactDom from 'react-dom'

function Greetings() {
  return <h4>My first component from empty react app</h4>
}

ReactDom.render(<Greetings />, document.getElementById("root"));
