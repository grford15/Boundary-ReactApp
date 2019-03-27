import {BoundaryJSClient} from "./basclient";



let REACT_APP_API_BASE_URL="http://localhost:8080";


let userServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/users');


export default {

    getAll() {
        return userServiceClient.get();
    },

    update(userData) {
        let url = "http://localhost:8080/api/users";
        
        return userServiceClient.post(url, userData);
    
    },


    logout() {
        localStorage.removeItem('isAuth');
    }

}
