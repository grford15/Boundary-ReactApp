import {BoundaryJSClient} from "./basclient";

let REACT_APP_API_BASE_URL="http://localhost:8080";


let purchaseServiceClient = new BoundaryJSClient(REACT_APP_API_BASE_URL + '/api/purchases');

export default {

    getAll() {
        return purchaseServiceClient.get();
    },

    add(purchaseData) {
        return purchaseServiceClient.post("http://localhost:8080/api/purchases", purchaseData);
    }
}