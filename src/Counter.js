import React , {useState} from "react";

const Counter = ({initialState=0}) => {
    const [count, setCount] = useState(initialState);
    const handleIncrement = () => {
        setCount(count + 1);
        };
        const handleDecrement = () => {
        setCount(count - 1);
        };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
        );
        };
        export default Counter;
