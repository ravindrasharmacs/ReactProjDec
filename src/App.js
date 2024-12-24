import React from "react";
import "./App.css";
// import "./styles.css"

import { ThemeProvider, useTheme } from './ThemeContext'; // Import the Theme Provider

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
    <ThemeProvider>
        <ThemedApp />
    </ThemeProvider>
);

export default App;
