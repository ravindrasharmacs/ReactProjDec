/** useContext hook in react */
import { useContext , createContext } from "react";

const Contexts = createContext('light');

function Theme() {
    const theme = useContext(Contexts);
    return (
        <div>
            <h1>{theme}</h1>
        </div>
    )
}

export default function ExampleClass(){
    return (
        <Contexts.Provider value="dark">
            <Theme />
        </Contexts.Provider>
    );
}