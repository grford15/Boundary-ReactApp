import React from 'react';
import { connect } from 'react-redux';
import purchasesServiceClient from '../../api/purchases-service-client';
import productsServiceClient from '../../api/products-service-client';


class UserPurchases extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            purchases: undefined,
            user: undefined,
            products: undefined
        }
    }

    async componentDidMount() {

        let purchaseDataReq = await purchasesServiceClient.getAll();
        let purchaseData = purchaseDataReq.data.purchases;

        let productDataReq = await productsServiceClient.getAll();
        let productData = productDataReq.data.products;

        this.setState({
            purchases: purchaseData,
            user: JSON.parse(localStorage.getItem('user')),
            products: productData
        })

        
    }
    

    render() {
        console.log(this.state.purchases);
        
        return(
             
            this.state.purchases !== undefined && this.state.user !== undefined && this.state.products !== undefined &&
            
            <div>
                <h2 className='text-center'>My Purchases</h2>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Cost of Purchase</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {

                            this.state.purchases.filter(purchase => purchase.user_id === this.state.user.id).map((purchase, index) => {
                                let product = this.state.products.find(function(o) {
                                    return o.id === purchase.product_id
                                  });
                                  let price = product.cost * purchase.quantity;
                                return (
                                    <tr key={index}>
                                    <th scope="row">{product.display_name}</th>
                                    <td>{purchase.quantity}</td>
                                    <td>£ {price.toFixed(2)}</td>
                                </tr>       
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default connect()(UserPurchases)