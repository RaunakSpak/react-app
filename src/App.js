import React, { useState } from 'react';
import './App.css'

import Counter from './counter';

const App = () => {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Counter App</h1>
      <h2>Current Count: {count}</h2>
      <button
        onClick={increment} className='inc-btn'>
        Increment
      </button>
      <button
        onClick={decrement} className='dec-btn'>
        Decrement
      </button>
      <Counter/>
    </div>
  );
};

export default App;
