import {BoundaryJSClient} from "./basclient";



let REACT_APP_API_BASE_URL="http://localhost:8080";


let userServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/users');

let individualServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/users/1')

export default {

    getAll() {
        return userServiceClient.get();
    },

    getOne() {
        return individualServiceClient.get();
    }

}