import { useState } from 'react';
import Ex_2 from './Ex_2';
import Data from './Data';
import Color from './Color';
import Form from './Form';
import UseEffect from './UseEffect';
import Fetch from './Fetch';
import MultipleReturn from './MultipleReturn';
import Timer from './Timer';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>Reset</button>
      <Ex_2 />
      <Data />
      <br />
      {/* <Color></Color> */}
      <Form></Form>
      <UseEffect></UseEffect>
      <Fetch></Fetch>
      <MultipleReturn></MultipleReturn>
      <Timer></Timer>
    </>
  );
}

export default App;
