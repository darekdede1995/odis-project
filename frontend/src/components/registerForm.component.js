import React from 'react';
import "../styles/index.css";

function RegisterForm() {

    return (
        <div className="register-container">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="repeat password"/>
        <button>SUMBIT</button>
        </div>
    );
}

export default RegisterForm;
