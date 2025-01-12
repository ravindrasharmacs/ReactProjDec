import { useRef } from "react";

function Focus() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}

export default Focus;