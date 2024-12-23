import React, { useState } from "react";
import Input from './Input';
import Display from './Display';

function Parent() {
    const [formData, setFormData] = useState({
        name: '',
        lastname: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <h1>Форма</h1>
            <Input 
                formData={formData} 
                onInputChange={handleInputChange} 
            />
            <Display formData={formData} />
        </div>
    );
}

export default Parent;