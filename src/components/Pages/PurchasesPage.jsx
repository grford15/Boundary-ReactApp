import React from 'react';
import { connect } from 'react-redux';
import purchasesServiceClient from '../../api/purchases-service-client';
import userServiceClient from '../../api/user-service-client';
import productsServiceClient from '../../api/products-service-client';
import './CSS/PurchasesPage.css';
var _ = require('lodash/core');

class PurchasesPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            purchases: undefined,
            users: undefined,
            products: undefined
        }
    }

    async componentDidMount() {
        let purchaseDataReq = await purchasesServiceClient.getAll();
        let purchaseData = purchaseDataReq.data.purchases;

        let userDataReq = await userServiceClient.getAll();
        let userData = userDataReq.data.users;

        let productDataReq = await productsServiceClient.getAll();
        let productData = productDataReq.data.products;

        this.setState({
            purchases: purchaseData,
            users: userData,
            products: productData
        });
    }

    render() {
        
        return(
            this.state.purchases != null && this.state.users != null && this.state.products != null &&
            
            <div>
                <h2 className='text-center'>Purchases</h2>
                <a href="/addpurchase" className="btn btn-primary">Add A Purchase</a>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Cost of Purchase</th>
                </tr>
                </thead>
                <tbody>
                {
                    
                    this.state.purchases.map((purchase, index) => {
                        let productUser = _.find(this.state.users, function(o) { return o.id === purchase.user_id; });
                        let theProduct = _.find(this.state.products, function(o) { return o.id === purchase.product_id; })
                        let price = theProduct.cost * purchase.quantity;
                            return (
                                <tr key={index}>
                                    <th scope="row">{productUser.first_name + " " + productUser.second_name}</th>
                                    <td>{theProduct.display_name}</td>
                                    <td>{purchase.quantity}</td>
                                    <td>£ {price.toFixed(2)}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
            </div>
        )
    }
}

export default connect()(PurchasesPage);
