import React from 'react';
import { connect } from 'react-redux';
import './CSS/EditUser.css';
import {eventUpdateAsync} from '../../store/authentication/actions';

class EditUser extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            submitted: false
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }


    _handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
        
    }

    _handleSubmit(e) {
        e.preventDefault()
        
        this.setState({ submitted: true });
        const { first_name, second_name, email_address, username, password, id } = this.state;
        const { dispatch } = this.props;

        dispatch(eventUpdateAsync(first_name, second_name, email_address, username, password, id));
    }
    
    render() {
        return (
    <div>
        <form name="form" onSubmit={this._handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >First Name</label>
                <input type="text" className="form-control" name="first_name" value={this.state.user.first_name} onChange={this._handleChange}/>
                </div>
                <div className="form-group col-md-6">
                <label >Second Name</label>
                <input type="text" className="form-control" name="second_name" value={this.state.user.second_name} onChange={this._handleChange}/>
                </div>
                <label >E-Mail Address</label>
                <input type="text" className="form-control" name="email_address" value={this.state.user.email_address} onChange={this._handleChange}/>
                <div className="form-group col-md-6">
                <label >User Name</label>
                <input type="text" className="form-control" name="username" value={this.state.user.username} onChange={this._handleChange}/>
                </div>
                <div className="form-group col-md-6">
                <label >Password</label>
                <input type="password" className="form-control" name="password" value={this.state.user.password} onChange={this._handleChange}/>  
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary" onSubmit={this._handleSubmit}>Submit</button>
                </div>
            </div>
        </form>
    </div>
    )
    }
}

export default connect()(EditUser);