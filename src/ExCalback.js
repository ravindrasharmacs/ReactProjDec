import React, { useState, useCallback, memo } from 'react';


// A memoized component that renders a list of numbers
const NumberList = memo(({ numbers, addNumber }) => {
  console.log("NumberList rendered");
  return (
    <div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add Random Number</button>
    </div>
  );
});

const ExCalback = () => {
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(0);

  // useCallback memoizes the addNumber function
  const addNumber = useCallback(() => {
    const newNumber = Math.floor(Math.random() * 100);
    setNumbers(prevNumbers => [...prevNumbers, newNumber]);
  }, []); // Empty dependency array means this function is created once and never changes

  return (
    <div>
      <h1>useCallback Example</h1>
      <NumberList numbers={numbers} addNumber={addNumber} />
      <div>
        <p>Button click count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default ExCalback;
