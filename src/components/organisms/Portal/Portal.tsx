import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {iPortal} from "./types";

const Portal = ({children}: iPortal) => {
    const [container] = useState(() => document.createElement('div'));
    useEffect(() => {
        document.body.appendChild(container);
        return () => document.body.removeChild(container);
    }, [])
    return ReactDOM.createPortal(children, container);
};

export default Portal;