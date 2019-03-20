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
            <h1>Welcome to your DashBoard {this.state.user.first_name + " " + this.state.user.second_name}</h1>
        )
    }
    
}

export default connect()(DashboardPage);