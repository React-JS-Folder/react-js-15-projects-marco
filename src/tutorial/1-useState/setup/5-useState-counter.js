import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const complexCounter = () => {
    setTimeout( () => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
        <button className="btn" onClick={reset}>Reset</button>
        <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexCounter}>complex counter</button>
      </section>

    </>
  )
};

export default UseStateCounter;
