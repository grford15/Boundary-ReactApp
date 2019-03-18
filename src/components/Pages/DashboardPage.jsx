import React from 'react';
import { connect } from 'react-redux';


class DashboardPage extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        console.log(this.state);
        
        return (
            <div className="container">
                <h1>Welcome to your Dashboard</h1>
            </div>
        );
    }
}

export default connect()(DashboardPage);