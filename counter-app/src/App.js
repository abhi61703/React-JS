import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [bgClass, setBgClass] = useState('');

  useEffect(() => {
    if (count === 15) {
      setBgClass('green-bg');
    } else if (count === 0) {
      setBgClass('red-bg');
    } else {
      setBgClass('');
    }
  }, [count]);

  const incrementCount = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className={`App ${bgClass}`}>
      <header>
        <h1>Counter App</h1>
      </header>
      <h1>Value: {count}</h1>
      <button onClick={resetCount}>Reset</button>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
