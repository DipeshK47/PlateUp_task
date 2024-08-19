import React from 'react';
import './AppointmentBar.css';
import InputBox from './InputBox';

const AppointmentBar = () => {
    return (
        <div className="appointment-bar">
            <InputBox placeholder="Condition, Procedure, Speciality..." logo="https://img.icons8.com/?size=100&id=14079&format=png&color=000000" />
            <InputBox placeholder="City, state or Zipcode" logo="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" />
            <InputBox placeholder="Insurance carrier" logo="https://img.icons8.com/?size=100&id=Vull6bP79jrQ&format=png&color=000000" />
            <button className="find-now-button">
    <img src="https://img.icons8.com/?size=100&id=14079&format=png&color=000000" alt="Icon" className="find-now-icon" />
    Find Now
</button>
        </div>
    );
};

export default AppointmentBar;