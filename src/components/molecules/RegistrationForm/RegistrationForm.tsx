import React, {useEffect, useState} from 'react';
import Input from "../../atoms/Input/Input";
import {registrationUser} from "../../../store/action-creators/user";
import {useAppDispatch} from "../../../hooks/store";
import Button from "../../atoms/Button/Button";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../hooks/store";
import './RegistrationForm.scss';
const RegistrationForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [isPasswordsWrong, setPasswordsWrong] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.user?.error?.message);
    const info = useAppSelector(state => state.user?.info?.message);

    useEffect(() => {
        if(password !== password2) {
            setDisabled(true);
            setPasswordsWrong(true);
        } else {
            if(email === '' || username === '' || password  === '' || password2  === '' ) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
            setPasswordsWrong(false);
        }
    }, [email, username, password, password2])

    const onRegistrationHander =  () => {
        dispatch(registrationUser(email, username, password));
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword2('');
    };

    return (
        <div className="registration-form">
            <h2 className="registration-form__title">Registration</h2>
            <Input value={email}
                   type="email"
                   onChange={(e) => setEmail(e.target.value)}
                   label={"Email"}
            />
            <Input value={username}
                   type="text"
                   onChange={(e) => setUsername(e.target.value)}
                   label={"Username"}
            />
            <Input value={password}
                   type="password"
                   onChange={(e) => setPassword(e.target.value)}
                   label={"Password"}
            />
            <Input value={password2}
                   type="password"
                   onChange={(e) => setPassword2(e.target.value)}
                   label={"Repeat Password"}
            />
            <Button btnEvent={onRegistrationHander}
                    className="registration-form__button"
                    disabled={disabled}
            >Sign Up</Button>
            {isPasswordsWrong && (
                <p className="registration-form__text">Passwords don't match</p>
            )}
            {error && (
                <p className="registration-form__text">{error}</p>
            )}
            {info && (
                <p className="registration-form__text">{info}</p>
            )}
            <p className="registration-form__text">Have an account? <NavLink to="/login">Log in</NavLink></p>
        </div>
    );
};

export default RegistrationForm;