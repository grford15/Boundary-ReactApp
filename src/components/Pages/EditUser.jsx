import React from 'react';
import { connect } from 'react-redux';

class EditUser extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) 
        }
    }
    
    render() {
        console.log(this.state.user);
        return (
    <div>
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >First Name</label>
                <input type="text" className="form-control" placeholder={this.state.user.first_name}/>
                </div>
                <div className="form-group col-md-6">
                <label >Second Name</label>
                <input type="text" className="form-control" placeholder={this.state.user.second_name}/>
                </div>
                <label >E-Mail Address</label>
                <input type="text" className="form-control" placeholder={this.state.user.email_address}/>
                <div className="form-group col-md-6">
                <label >User Name</label>
                <input type="text" className="form-control" placeholder={this.state.user.username}/>
                </div>
                <div className="form-group col-md-6">
                <label >Password</label>
                <input type="password" className="form-control" placeholder={this.state.user.password}/>  
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    )
    }
}

export default connect()(EditUser);