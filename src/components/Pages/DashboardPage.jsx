import React from 'react';
import { connect } from 'react-redux';


class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: undefined
        }
    }

    async componentDidMount(){
        let currentUser = JSON.parse(localStorage.getItem('user'));
        this.setState({user: currentUser})
    }

    
    render(){
        return(
            this.state.user != null &&
            <div className="jumbotron">
                <h1 className="display-3">Welcome to your Dashboard {this.state.user.first_name + " " + this.state.user.second_name}</h1>
                <div className="list-group">
                    <a href="/myaccount" className="list-group-item list-group-item-action">My Account</a>
                    <a href="/products" className="list-group-item list-group-item-action">Products</a>
                    <a href="/purchases" className="list-group-item list-group-item-action">Purchases</a>
                </div>
            </div>
        )
    }
    
}

export default connect()(DashboardPage);