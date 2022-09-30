export enum UserActionsTypes {
    SAVE_USER = 'SAVE_USER',
    SET_LOADING = 'SET_LOADING',
    GET_CITIES = 'GET_CITIES',
    GET_SCHEDULER = 'GET_SCHEDULER',
}

export type UserActions = {
    type: UserActionsTypes;
    payload: any;
}