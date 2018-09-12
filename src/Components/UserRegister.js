import React, { Component, Fragment } from 'react';
import UserAdapter from '../api/UserAdapter';
import { connect } from 'react-redux'
import { loginUser } from '../Actions/index';
import { NavLink, Redirect } from 'react-router-dom' 
import { Container, Button, Form, Divider } from 'semantic-ui-react'


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
            return (<Container>

                <Form id="registerForm" onSubmit={this.postUser}>
                <Form.Field>
                    <label htmlFor="email-input">Enter Your Email Address!</label> <br />
                    <input type="text" id="email-input" name="email" value={this.state.email} placeholder="example@example.com" onChange={this.handleChange} required /> 
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password-input">Create a Secure Password</label><br />
                    <input type="password" id="password-input" name="password" value={this.state.password} placeholder="enter a secure password" onChange={this.handleChange} required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="display-name-input">What should we call you?</label><br />
                    <input type="text" id="display-name-input" name="username" value={this.state.username} placeholder="America's Radio Sweetheart" onChange={this.handleChange} required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="profile-image-input">Link a Profile Photo if you like! Or not, podcasting is an aural medium</label><br />
                    <input type="text" id="profile-image-input" name="profile_image" value={this.state.profile_image} placeholder="this is optional!" onChange={this.handleChange} />
                </Form.Field>
                    <Button inverted color="green" position="right" type='submit'>Submit</Button>
                </Form>
                <Divider />
                <p>Already have an account?</p>
                <NavLink to='login'>Login here!</NavLink>

            </Container>)
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
