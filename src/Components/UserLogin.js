import React, { Component } from 'react';
import { connect } from 'react-redux'
import {loginUser} from '../Actions/index';

class UserLogin extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // this will include a function (action) passed down from redux to indicate the user
        event.preventDefault()
        this.props.loginUser(this.state.email, this.state.password, this.props.history)
        this.setState({ email: '', password: '' })
    }


    render() {
        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <label htmlFor="email-input">Login with your email!</label> <br />
                <input type="text" id="email-input" name="email" value={this.state.email} placeholder="example@example.com" onChange={this.handleChange} required /> <br />
                <label htmlFor="password-input">Enter Your Password!</label><br />
                <input type="password" id="password-input" name="password" value={this.state.password} placeholder="enter a secure password" onChange={this.handleChange} required /><br />
                <input type="submit" />  <br />
            </form>
        );
    }
}


const mapStateToProps = ({ usersReducer: { user, loggedIn, authenticated, loginSuccess, error } }) => ({
    user,
    loggedIn,
    authenticated,
    loginSuccess,
    error
})




// export default connect(UserLogin);
export default connect(mapStateToProps, {loginUser})(UserLogin)
