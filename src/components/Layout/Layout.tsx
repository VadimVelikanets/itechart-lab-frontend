import React, {memo} from 'react';
import {iLayout} from "./types";
import './Layout.scss';
const Layout = ({children}: iLayout) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default memo(Layout);