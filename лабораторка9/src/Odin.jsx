import React, { useState } from "react";
import One from './Odin';

function Odin() {
    const [color, setColor] = useState('#00ff00');

    return (
        <div>
            <Odin onChange={setColor} />

            <p style={{ color }}>Выберите цвет</p>
        </div>
    );
}

export default Odin;