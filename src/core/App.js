import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route} from 'react-router';
import { browserHistory} from "./browserhistory";
import DashboardPage from '../components/Pages/DashboardPage';
import LoginPage from "../components/Pages/LoginPage";

import './App.css';
import {ProtectedRoute} from "../components/Routes/ProtectedRoute";
import RegisterPage from "../components/Pages/RegisterPage";
import UsersPage from "../components/Pages/UsersPage";
import ProducsPage from "../components/Pages/ProductsPage";
import Navbar from "../components/Navbar";
import MyAccount from '../components/Pages/MyAccount';
import EditUser from '../components/Pages/EditUser';
import PurchasesPage from '../components/Pages/PurchasesPage';
import UserPurchases from '../components/Pages/UserPurchases';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem('user'))
    }

    // const {dispatch} = this.props;
    browserHistory.listen(() => {});
  }

  render() {
    return (
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8-col-sm-offset-2">
            
              <Router history={browserHistory}>
                <div>
                <Navbar />
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/register" component={RegisterPage}/>
                  <ProtectedRoute exact path="/" component={DashboardPage} authStore={this.props.auth}/>
                  <ProtectedRoute exact path="/users" component={UsersPage} checkingFunction={this.props.auth}/>
                  <ProtectedRoute exact path="/products" component={ProducsPage} checkingFunction={this.props.auth} />
                  <ProtectedRoute exact path="/myaccount" component={MyAccount} checkingFunction={this.props.auth} />
                  <ProtectedRoute exact path="/purchases" component={PurchasesPage} checkingFunction={this.props.auth} />
                  {this.state.user !== null && <ProtectedRoute exact path={"/edit/" + this.state.user.id} component={EditUser} checkingFunction={this.props.auth} />}
                  {this.state.user !== null && <ProtectedRoute exact path={"/userpurchases/"} component={UserPurchases} checkingFunction={this.props.auth} />}
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

export default connect((state) => ({
  auth: state.auth
}))(App);
