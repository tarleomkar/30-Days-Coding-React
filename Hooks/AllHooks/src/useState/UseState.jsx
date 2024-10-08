import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount (count + 1);
    }

    const handledecrement = () => {
        setCount (count - 1);
    }
  return (
    <div>
        <h1>The Count is: {count}</h1>
        <button onClick={handledecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default UseState