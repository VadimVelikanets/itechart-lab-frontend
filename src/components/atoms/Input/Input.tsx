import React, {memo} from 'react';
import {InputProps} from "./types";
import classNames from "classnames";

const Input = ({value, type, onChange, placeholder, label, className}: InputProps) => {
    return (
        <div className={classNames("input ", { [className] : className })}>
            {label && <div className="input__label">{label}</div>}
            <input type={type}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}/>
        </div>
    );
};

export default Input;