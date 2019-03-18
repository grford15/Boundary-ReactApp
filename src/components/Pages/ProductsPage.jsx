import React from 'react';
import productServiceClient from '../../api/products-service-client';
import { connect } from 'react-redux';

class ProductsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            products: undefined
        }
    }

    async componentDidMount() {
        let productDataReq = await productServiceClient.getAll();
        let productData = productDataReq.data;

        this.setState({products: productData.products});
    }

    render() {
        return(
            this.state.products != null &&
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Cost</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.display_name}</td>
                                    <td>{product.cost}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        )
    }

}

export default connect()(ProductsPage);