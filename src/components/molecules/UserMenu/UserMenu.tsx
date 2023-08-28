import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import './UserMenu.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks/store";
import {logoutUser} from "../../../store/action-creators/user";
import {NavLink} from "react-router-dom";
const UserMenu = () => {
    const user = useAppSelector(state => state.user?.user);
    const dispatch = useAppDispatch();
    const onLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className="user-menu">
            {user ? (
                <>
                    <span className="user-menu__name">{user?.username}</span>
                    <LogoutIcon
                        className="user-menu__logout"
                        onClick={onLogout}
                    />
                </>
            ) : (
                <NavLink to="/login"
                         className="user-menu__name"
                >Sign In</NavLink>
            )}

        </div>
    );
};

export default UserMenu;