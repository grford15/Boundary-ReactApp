import {BoundaryJSClient} from "./basclient";

let REACT_APP_API_BASE_URL="http://localhost:8080";


let productServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/products');

export default {

    getAll() {
        return productServiceClient.get();
    }
}