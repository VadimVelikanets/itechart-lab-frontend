import React from 'react';
import {iButton} from "./types";
import './Button.scss';
import classNames from "classnames";
const Button = ({children, btnEvent, disabled, className, tabIndex}: iButton) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        e.preventDefault();
        if(e.key === "Enter" || e.key === '') {
            btnEvent();
        }
    }

    return (
        <button
            onClick={btnEvent}
            onKeyDown={onKeyDown}
            className={classNames("button ", { [className] : className })}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;