import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '<') {
      setInput(input.length > 1 ? input.slice(0, -1) : '0');
    } else if (value === '=') {
      try {
        setInput(eval(input)); // Evaluate the expression
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input === '0' ? value : input + value);
    }
  };

  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('<')}>&lt;</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
