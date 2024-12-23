import React, { useState } from "react";

import Chetire from './Chetire'; 

function Chetire() {
    const [selected, setSelected] = useState([false, false, false]);

    const handleCheckboxChange = (index, isChecked) => {
        const newSelected = [...selected];
        newSelected[index] = isChecked;
        setSelected(newSelected);
    };

    const isAnyChecked = selected.includes(true); 

    return (
        <div>
            <Chetirehetire selected={selected} onCheckboxChange={handleCheckboxChange} />
            {isAnyChecked && <p>Выбрано</p>} {}
        </div>
    );
}

export default Chetire;