import React from 'react';
import './InputBox.css';

const InputBox = ({ placeholder, logo }) => {
    return (
        <div className="input-box">
            <img src={logo} alt="logo" className="input-logo" />
            <input type="text" placeholder={placeholder} className="input-field" />
        </div>
    );
};

export default InputBox;