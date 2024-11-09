import React, { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0);

const HandleIncrement = () => {
    setCount(count + 1);
}

const HandleDecrement = () => {
    setCount(count - 1);
}

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingLeft: '10px'}}>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <div>
                <button onClick={HandleIncrement}>Increment</button>
                <button onClick={HandleDecrement}>Decrement</button>
            </div>
        </div>
    )
};

export default Counter;