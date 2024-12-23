
import React from "react";

function Proect({ label, onChange }) {
    return (
        <div>
            <label>{label}:</label>
            <input
                type="number"
                onChange={(e) => onChange(e.target.value)}
                placeholder="Введите число"
            />
        </div>
    );
}

export default Proect;