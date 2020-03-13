import React from 'react';
import "../styles/index.css";

function LoginForm() {

    return (
        <div className="login-container">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>SUMBIT</button>
        </div>
    );
}

export default LoginForm;
