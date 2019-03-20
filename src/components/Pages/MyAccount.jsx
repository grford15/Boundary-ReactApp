import React from "react";
import individualServiceClient from "../../api/user-service-client";
import { connect } from 'react-redux';

class MyAccount extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }

    async componentDidMount() {
        let userDataReq = await individualServiceClient.getOne();
        let userData = userDataReq.data;

        this.setState({user: userData});
    }

    render() {
        return (
            this.state.user != null &&
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Forename</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Active</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                    <th scope="row">{this.state.user.id}</th>
                    <td>{this.state.user.first_name}</td>
                    <td>{this.state.user.second_name}</td>
                    <td>{this.state.user.email_address}</td>
                    <td>{this.state.user.username}</td>
                    <td>{this.state.user.is_active ? 'Y' : 'N'}</td>
                </tr>
                            
                </tbody>
            </table>
        )
    }
}

export default connect()(MyAccount);