import {USER_LOGGED_OUT, USER_LOGIN_SUCCESS} from "./actions";

const initialState = {
    loggedIn : false,
    user: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS: {
            localStorage.setItem('isAuth', 'Y');
            return Object.assign({}, state, {
                loggedIn: true,
                user: JSON.parse(localStorage.getItem('user'))
            });
            
            
        }
        case USER_LOGGED_OUT:
        {
            return Object.assign({}, state, {
                loggedIn: false
            });
        }
        default: {
            return state;
        }
    }
};

export {reducer as authReducer};