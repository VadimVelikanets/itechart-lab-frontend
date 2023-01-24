import React from 'react';
import {iButton} from "./types";
const Button = ({name, btnEvent, disabled, className, tabIndex}: iButton) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        e.preventDefault();
        if(e.key === "Enter" || e.key === '') {
            btnEvent();
        }
    }

    return (
        <div
            onClick={btnEvent}
            onKeyDown={onKeyDown}
            className={className}
            role='tab'
            tabIndex={tabIndex}
            aria-disabled={false}
        >
            {name}
        </div>
    );
};

export default Button;