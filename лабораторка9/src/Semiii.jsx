import React from "react";

function Semiii({ lastName, onLastNameChange }) {
    return (
        <div>
            <label>Фамилия: </label>
            <input 
                type="text" 
                value={lastName} 
                onChange={onLastNameChange} 
                placeholder="Введите фамилию" 
            />
        </div>
    );
}

export default Semiii;