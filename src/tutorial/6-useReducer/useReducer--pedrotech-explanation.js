import React, { useReducer } from 'react'   //import useReducer



const reducer = (state, action) => {
  switch (action.type){

    case "INCREMENT":   //this is a function
      return {count: state.count + 1, showText: state.showText}

    case "toggleShowText": //this is a function
      return { count: state.count, showText: !state.showText}
    default:
      return state

    }
  }

export default function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer,   //useReducer(function, initialize useState variables)
    {count: 0, showText: true});

  return (
    <div>
      <h1>{state.count}</h1>
      <button 
        onClick={() => {
          dispatch({type: "INCREMENT"});      //dispatch({type: " "}) is addEventListener for useReducer
          dispatch({type: "toggleShowText"})  //dispatch({type: " "}) is addEventListener for useReducer
        }}
        >
          Click Here
      </button>

      {state.showText && <p>This is a text</p>}   {/*value from useReducer()  state.variable */}
    </div>
  );
};
