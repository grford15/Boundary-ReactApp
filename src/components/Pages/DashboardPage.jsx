import React from 'react';
import { connect } from 'react-redux';


class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }

    

    render() {
        

        return (
            <div className="container">
                <h1>Welcome to your Dashboard {this.state.user.first_name}</h1>
            </div>
        );
    }
}

export default connect()(DashboardPage);