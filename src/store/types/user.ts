export interface UserState {
    user: null,
    error: string | null,
    isLoading: boolean,
    info: string | null,
    token: string | null,
}

export enum userActions {
    CREATE_USER="CREATE_USER",
    CREATE_USER_ERROR="CREATE_USER_ERROR",
    GET_USER="GET_USER",
    FETCH_USER_ERROR="FETCH_USER_ERROR",
    FETCH_USER_SUCCESS="FETCH_USER_SUCCESS",
    LOGOUT_USER="LOGOUT_USER",
}

export interface createUserAction {
    type: userActions.CREATE_USER,
    payload: any
}

export interface createUserErrorAction {
    type: userActions.CREATE_USER_ERROR,
    payload: any
}
export interface getUserAction {
    type: userActions.GET_USER,
    payload: any
}
export interface fetchUserErrorAction {
    type: userActions.FETCH_USER_ERROR,
    payload: string
}

export interface fetchUserSuccessAction {
    type: userActions.FETCH_USER_SUCCESS,
    payload: any
}

export interface logoutUserAction {
    type: userActions.LOGOUT_USER
}

export type UserAction = createUserAction | createUserErrorAction | getUserAction | fetchUserErrorAction | fetchUserSuccessAction | logoutUserAction