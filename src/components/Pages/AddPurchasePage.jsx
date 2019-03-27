import React from 'react';
import { connect } from 'react-redux';
import userServiceClient from '../../api/user-service-client';
import productsServiceClient from '../../api/products-service-client';

class AddPurchasePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: undefined,
            products: undefined,
            user: undefined,
            product: undefined,
            quantity: 0
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        let userDataReq = await userServiceClient.getAll();
        let userData = userDataReq.data.users;

        let productDataReq = await productsServiceClient.getAll();
        let productData = productDataReq.data.products;

        this.setState({
            users: userData,
            products: productData
        })
    }

    handleUserChange(event) {
        let result = event.target.value;
        this.setState({user: result}); 
    }

    handleProductChange(event) {
        let result = event.target.value;
        this.setState({product: result});
    }

    handleQuantityChange(event) {
        let result = event.target.value;
        this.setState({quantity: result});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            this.state.users !== undefined && this.state.products !== undefined &&
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Select User:
                         <select className="form-control" onChange={this.handleUserChange}>
                         {this.state.users.map((user, index) => {
                             return(
                                <option key={index} value={user.id}>{user.first_name + " " + user.second_name}</option>
                             )
                         })}
                        </select>
                    </label>
                    <label>Select Product:
                         <select className="form-control" onChange={this.handleProductChange}>
                         {this.state.products.map((product, index) => {
                             return(
                                <option key={index} value={product.id}>{product.display_name}</option>
                             )
                         })}
                        </select>
                    </label>
                    <label>
                        Quantity
                        <input type="number" className="form-control" name="quantity" onChange={this.handleQuantityChange} min="1" max="20"/>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Add Purchase</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddPurchasePage);