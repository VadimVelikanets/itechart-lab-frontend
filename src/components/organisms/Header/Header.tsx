import React from 'react';
import './Header.scss';
import UserMenu from "../../molecules/UserMenu/UserMenu";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__wrapper">
                    <NavLink className="header__logo"
                             to={'/'}>Questionary App</NavLink>
                    <UserMenu/>
                </div>
            </div>
        </div>
    );
};

export default Header;