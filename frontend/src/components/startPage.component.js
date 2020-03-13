import React from 'react';
import "../styles/index.css";
import { useState } from 'react';
import LoginForm from "./loginForm.component";
import RegisterForm from "./registerForm.component";

function StartPage() {

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <div className="start-container">
            <div className="button-group">
                <button className={login ? 'selected-button' : ''} onClick={loginToggle}>LOGIN</button>
                <button className={register ? 'selected-button' : ''} onClick={registerToggle}>REGISTER</button>
            </div>
            <div hidden={!login}>
                <LoginForm />
            </div>
            <div hidden={!register}>
                <RegisterForm />
            </div>
        </div>
    );

    function loginToggle() {
        setLogin(!login);
        setRegister(false);
    }

    function registerToggle() {
        setRegister(!register);
        setLogin(false);
    }
}

export default StartPage;
