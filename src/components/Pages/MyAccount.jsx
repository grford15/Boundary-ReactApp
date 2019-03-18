import React from "react";
import userServiceClient from "../../api/user-service-client";
import { connect } from 'react-redux';

class MyAccount extends React.Component {
    constructor(props){
        super(props);

        this.state={
            user: undefined
        }
    }

    async componentDidMount() {
        let userDataReq = await userServiceClient.getAll();
        let userData = userDataReq.data;

        this.setState({user: userData.user});
    }
}

export default connect()(MyAccount);