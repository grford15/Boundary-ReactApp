import React from 'react';
import { connect } from 'react-redux';


class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: undefined
        }
    }

    

    render() {
        
        let user = localStorage.getItem('user');

        console.log(typeof user);
        return (
            <div className="container">
                <h1>Welcome to your Dashboard {user}</h1>
            </div>
        );
    }
}

export default connect()(DashboardPage);