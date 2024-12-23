import React, { useState } from "react";
import Increment from './Increment';
import Decrement from './Decrement';

function Chetire() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h3>Общий счётчик: {count}</h3>
            <Increment onIncrement={increment} />
            <Decrement onDecrement={decrement} />
        </div>
    );
}

export default Counter;