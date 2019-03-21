import React from "react";
import { connect } from 'react-redux';
import './CSS/MyAccount.css';

class MyAccount extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }

    async componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        

        this.setState({user: currentUser});
        
    }

    render() {
        
        return (
            this.state.user != null &&

            <div className="card">
            <div className="card-body">
              <h4 className="card-title">Account Details</h4>
              <p className="card-text font-weight-bold">Name:</p>
              <p className="card-text"> {this.state.user.first_name + " " + this.state.user.second_name}</p>
              <p className="card-text font-weight-bold">E-Mail:</p>
              <p className="card-text"> {this.state.user.email_address}</p>
              <p className="card-text font-weight-bold">Username:</p>
              <p className="card-text"> {this.state.user.username}</p>
              <a className="btn btn-success" href={"/edit/" + this.state.user.id}role="button">Edit Details</a>
            </div>
          </div>
        )
        
    }
}

export default connect()(MyAccount);