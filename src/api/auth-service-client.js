import {BoundaryJSClient} from "./basclient";

let REACT_APP_API_BASE_URL="http://localhost:8080";

let authServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/auth');

export default {

    login(loginData) {
        return authServiceClient.post('/login', loginData);
    },

    register(accountData) {
    }
}