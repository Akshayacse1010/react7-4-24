import { useState } from 'react';
import './App.css';
function App() {
  const [counter, setCounter] = useState(0);
  /*Yes, you're correct. In React, batching refers to the process of bundling multiple state updates into a single re-render.

When you call setState (or in your case, setCounter) multiple times within the same synchronous execution block, React will batch these state updates together. This means that React will perform only one re-render with the final state value, instead of re-rendering the component multiple times for each state update. */
  const setValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const lowValue = () => {
    if (counter < 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={setValue}>increase </button>

      <button onClick={lowValue}> decrease</button>
    </div>
  );
}

export default App;
