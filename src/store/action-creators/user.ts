import {Dispatch} from "redux";
import {URL} from '../../constants/index';
import {UserAction, userActions} from "../types/user";

export const authUser =  () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const user = await fetch(`${URL}/auth/auth`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(async res => {
                const data = await res.json()
                if(!res.ok){
                    dispatch({type: userActions.FETCH_USER_ERROR, payload: data})
                } else {
                    dispatch({type: userActions.GET_USER, payload: data})
                }
            })
            return user
        } catch (e) {
            console.log(e)
        }
    }

}
export const loginUser =  (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await fetch(`${URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })
            .then(async res => {
                const data = await res.json()
                if(!res.ok){
                    dispatch({type: userActions.FETCH_USER_ERROR, payload: data})
                } else {
                    dispatch({type: userActions.FETCH_USER_SUCCESS, payload: data?.token})
                    localStorage.setItem('token', data?.token)
                    dispatch(authUser());
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

}

export const registrationUser = (email: string, username: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
              await fetch(`${URL}/auth/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                })
            })
                .then(async res => {
                    const data = await res.json();
                    if(!res.ok){
                        dispatch({type: userActions.CREATE_USER_ERROR, payload: data})
                    } else {
                        dispatch({type: userActions.CREATE_USER, payload: data})
                    }
                })
        } catch (e) {
            console.log(e)
            dispatch({type: userActions.CREATE_USER_ERROR, payload: e})
        }
    }
}

export const logoutUser = () => {
    localStorage.removeItem('token');
    return ({type: userActions.LOGOUT_USER})
}