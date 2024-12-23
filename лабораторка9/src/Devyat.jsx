import React, { useState } from "react";

import Devyat from "./Devyat";

function Devyat() {
    const [selectedOption, setSelectedOption] = useState(""); 
    
    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Выберите вариант</h1>
            <Devut onSelectionChange={handleSelectionChange} />
            <h2>Вы выбрали: {selectedOption}</h2> {}
        </div>
    );
}
export default Devyat;