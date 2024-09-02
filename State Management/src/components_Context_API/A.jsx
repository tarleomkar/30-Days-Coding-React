import React, { createContext } from 'react'
import B from './B';

// creating context
const GreetContext = createContext();
const Greet2Context = createContext();

export default function A() {
    const greet = "Hello";
    const greet2 = "Hello2"
  return (
    <div>
       {/* <B greet={greet}/> */}
       {/* With useContext */}
        <GreetContext.Provider value={greet.greet2}>
        <B/>
        </GreetContext.Provider>
    </div>
  );
}

export {GreetContext, Greet2Context};
