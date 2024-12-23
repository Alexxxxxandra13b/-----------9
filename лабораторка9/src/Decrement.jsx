import React from "react";

function Decrement({ onDecrement }) {
    return (
        <button onClick={onDecrement}>
            Уменьшить счётчик
        </button>
    );
}

export default Decrement;