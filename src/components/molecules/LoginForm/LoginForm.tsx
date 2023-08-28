import React, {useEffect, useState} from 'react';
import {loginUser} from "../../../store/action-creators/user";
import './LoginForm.scss';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/store";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const error = useAppSelector(state => state.user?.error?.message);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(email === '' || password === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [email, password])
    const onLoginHander = () => dispatch(loginUser(email, password));

    return (
        <div className="login-form">
            <h2 className="login-form__title">Login</h2>
            <Input type="text"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   label="Email"
            />
            <Input type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   label="Password"
            />
            <Button btnEvent={onLoginHander}
                    className="login-form__button"
                    disabled={disabled}
            >Login</Button>
            <p className="login-form__text">Don't have an account? <NavLink to="/registration">Sign up</NavLink></p>
            {error && (
                <p className="registration-form__text">{error}</p>
            )}
        </div>
    );
};

export default LoginForm;