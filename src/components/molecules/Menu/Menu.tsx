import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.scss';

const navLink = [
    {
        path: '/',
        name: 'New polls'
    },
    {
        path: '/my-polls',
        name: 'My polls'
    },
];

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu-list">
                {navLink.map(item => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className="menu-list__link"
                        >{item.name}</NavLink>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Menu;