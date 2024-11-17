import React, { useState } from "react";

export default function ButtonCount(startCount) {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(startCount);

    function addOne() {
        setCount(startCount + count + 1);
    }

    function resetCounter() {
        setCount(startCount);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}