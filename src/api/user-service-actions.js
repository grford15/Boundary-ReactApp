import {BoundaryJSClient} from "./basclient";

let REACT_APP_API_BASE_URL="http://localhost:8080";


let userActions = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/users');

export default {

    register(user) {
        return userActions.post(user);
    }

}