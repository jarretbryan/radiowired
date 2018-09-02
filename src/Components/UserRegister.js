import React, { Component, Fragment } from 'react';
import UserAdapter from '../api/UserAdapter';
import { connect } from 'react-redux'
import { loginUser } from '../Actions/index';
import { NavLink, Redirect } from 'react-router-dom' 


class UserRegister extends Component {

    state = {
        email:"",
        password:"",
        username: "",
        profile_image:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postUser = (event) => {
        event.preventDefault()
        UserAdapter.postUser(this.state)
        .then(res => this.props.loginUser(res.email, this.state.password))
  
    }

    showRegistration = () => {
        if (!!this.props.loggedIn){
            return <Redirect to='/profile' />
        } else {
            return (<Fragment>

                <form id="registerForm" onSubmit={this.postUser}>
                    <label htmlFor="email-input">Enter Your Email Address!</label> <br />
                    <input type="text" id="email-input" name="email" value={this.state.email} placeholder="example@example.com" onChange={this.handleChange} required /> <br />
                    <label htmlFor="password-input">Create a Secure Password</label><br />
                    <input type="password" id="password-input" name="password" value={this.state.password} placeholder="enter a secure password" onChange={this.handleChange} required /><br />
                    <label htmlFor="display-name-input">What should we call you?</label><br />
                    <input type="text" id="display-name-input" name="username" value={this.state.username} placeholder="America's Radio Sweetheart" onChange={this.handleChange} required /><br />
                    <label htmlFor="profile-image-input">Link a Profile Photo if you like! Or not, podcasting is an aural medium</label><br />
                    <input type="text" id="profile-image-input" name="profile_image" value={this.state.profile_image} placeholder="this is optional!" onChange={this.handleChange} /><br />
                    <input type="submit" />  <br />
                </form>
                <p>Already have an account?</p>
                <NavLink to='login'>Login here!</NavLink>

            </Fragment>)
        }
    }
        
    
    render() {
        return (
            <Fragment>

            {this.showRegistration()}

            </Fragment>
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

export default connect(mapStateToProps, {loginUser}) (UserRegister);
