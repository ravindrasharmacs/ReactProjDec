import React from "react";
import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import DataFetchingComponent from "./DataFetchingComponent";
import ResizableComponent from "./ResizableComponent";
import Focus from "./Focus";
import ExpCal from "./ExpCal";
// import "./styles.css"
import ExampleComponent from "./ExampleClass";

import { ThemeProvider, useTheme } from './ThemeContext'; // Import the Theme Provider
import ExCalback from "./ExCalback";

const ThemedApp = () => {
    const { theme, toggleTheme } = useTheme(); // Use the Theme Context

    return (
        <div className={`App ${theme}`}>
            <h1>{theme === 'light' ? 'Hello World (Light Theme)' : 'Hello World (Dark Theme)'}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

const App = () => (
    //Example of useState hook
    <div className="App">
        <h1>Use of callback hook</h1>
        <ExCalback />
        <h1>State and props example</h1>
        <Counter />
         <ExpCal num={5} />
        <Focus />
        <ResizableComponent />
        <h1>Timer Example</h1>
        <Timer />
        <h1>UseState Example</h1>
        <Counter />
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    </div>
);

export default App;
