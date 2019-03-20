import {BoundaryJSClient} from "./basclient";



let REACT_APP_API_BASE_URL="http://localhost:8080";


let userServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/users');


export default {

    getAll() {
        return userServiceClient.get();
    },

}