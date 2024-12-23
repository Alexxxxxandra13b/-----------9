import React, { useState } from "react";
import Semii from './Semii';   
import Semiii from './Semiii';   

function Semi() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    return (
        <div>
            {}
            <Semii firstName={firstName} onFirstNameChange={handleFirstNameChange} />
            {}
            <Semiii lastName={lastName} onLastNameChange={handleLastNameChange} />

            <h2>Полное имя: {firstName} {lastName}</h2>
        </div>
    );
}

export default Semi;