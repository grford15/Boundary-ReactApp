import React from 'react';
import { connect } from 'react-redux';
import './CSS/DashboardPage.css';


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
                    <a href="/products" className="list-group-item">Products</a>
                    <a href="/myaccount" className="list-group-item">My Account</a>
                    <a href="/userpurchases" className="list-group-item">My Purchases</a>
                </div>
            </div>
        )
    }
    
}

export default connect()(DashboardPage);