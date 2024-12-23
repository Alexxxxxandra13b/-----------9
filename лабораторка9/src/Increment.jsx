import React from "react";

function Increment({ onIncrement }) {
    return (
        <button onClick={onIncrement}>
            Увеличить счётчик
        </button>
    );
}

export default Increment;