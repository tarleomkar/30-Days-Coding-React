import { useState } from 'react'
import './App.css'
import Mobile from './components/Mobile'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mobile />
    </>
  )
}

export default App