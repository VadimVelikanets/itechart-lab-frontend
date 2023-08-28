import React, {memo} from 'react';
import {iLayout} from "./types";
import Header from '../../organisms/Header/Header';
import './Layout.scss';
const Layout = ({children}: iLayout) => {
    return (
        <div className="layout">
            <Header/>
            <div className="layout-content">
                {children}
            </div>

        </div>
    );
};

export default memo(Layout);