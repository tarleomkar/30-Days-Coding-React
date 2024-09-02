import React, { useState } from 'react'

function Color() {
    const [color, setColor] = useState("red");
  return (
    <>
    <h1>My favorite color is {color}</h1>
    <button
    onClick={() => setColor("blue")}
    >Blue</button>
    <button
    onClick={() => setColor("yellow")}
    >Yellow</button>
    <button
    onClick={() => setColor("pink")}
    >pink</button>
    <button
    onClick={() => setColor("black")}
    >black</button>
    </>
  )
}

export default Color