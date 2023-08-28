import {userActions} from "../types/user";

const initialState = {
    user: null,
    error: null,
    isLoading: true,
    info: null,
    token: null
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userActions.CREATE_USER:
            return {...state, isLoading: false, info: action.payload}
        case userActions.CREATE_USER_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case userActions.GET_USER:
            return {...state, user: action.payload, error: null, isLoading: false}
        case userActions.FETCH_USER_SUCCESS:
            return {...state,  user: null, token: action.payload, error: null, isLoading: false}
        case userActions.FETCH_USER_ERROR:
            return {...state, user: null, error: action.payload, isLoading: false}
        case userActions.LOGOUT_USER:
            return {...state, user: null, error: null, token: null}
        default:
            return state
    }
}