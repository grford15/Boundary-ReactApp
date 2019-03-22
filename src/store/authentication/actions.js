import authServiceClient from "./../../api/auth-service-client";
import {browserHistory} from "./../../core/browserhistory";
import userServiceClient from "./../../api/user-service-client";

export const USER_LOGGED_OUT = '@@auth/LOG_OUT';
export const USER_LOGIN_REQUEST = '@@auth/LOG_IN_REQ';
export const USER_LOGIN_SUCCESS = '@@auth/LOG_IN_SUCCESS';
export const USER_LOGIN_FAILURE = '@@auth/LOG_IN_FAILURE';
export const USER_UPDATE_REQUEST = 'UPDATE_REQ';
export const USER_UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'UPDATE_FAILURE';
export const LOGOUT = 'USER_LOGOUT';

export function actionLoginSuccess() {
    return {
        type: USER_LOGIN_SUCCESS
    }
};

export function actionUpdateSuccess() {
    return {
        type: USER_UPDATE_SUCCESS
    }
};

export function actionUpdateFailure(error) {
    return {
        type: USER_UPDATE_FAILURE,
        error
    }
};

export function actionLoginFailure(error) {
    return {
        type: USER_LOGIN_FAILURE,
        error
    }
};

export function eventLoginAsync(username, password) {


    return async (dispatch) => {

        let payload = {username: username, password: password};

        dispatch({ type: USER_LOGIN_REQUEST, payload: payload});

        try {
            let response = await authServiceClient.login(payload);
        
            dispatch(actionLoginSuccess());
            let theUser = JSON.parse(response.request.responseText);
            localStorage.setItem('user', JSON.stringify(theUser[0][0]));
            browserHistory.push('/');
            return response;
            
        } catch (e) {
            dispatch(actionLoginFailure(e));
        }
    }
}

export function logOut() {
    userServiceClient.logout();
    return { type: LOGOUT };
}

export function eventUpdateAsync(first_name, second_name, email_address, username, password, id) {

    return async (dispatch) => {
        let payload = {
            first_name: first_name,
            second_name: second_name,
            email_address: email_address,
            username: username,
            password: password,
            id: id
        };

        dispatch({ type: USER_UPDATE_REQUEST, payload: payload});

        try{
            let response = await userServiceClient.update(payload);

            browserHistory.push('/myaccount');

            dispatch(actionUpdateSuccess());

            return response;
        } catch(e){
            dispatch(actionLoginFailure(e));
        }
    }
}