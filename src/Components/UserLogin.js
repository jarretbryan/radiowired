import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../Actions/index';
import { NavLink, Redirect } from 'react-router-dom' 
import { Container, Button, Form, Divider, Message } from 'semantic-ui-react'



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
        // if (!!this.props.loggedIn){
        //     return <Redirect to='/profile' />
        // }
    }

    showError = () => {
        if (!!this.props.error){
            return (
            <Message negative>
                <Message.Header>Incorrect Login Credentials</Message.Header>
                <p>Did you enter your email address and password correctly?</p>
            </Message>)
        }
    }


    showLogin = () => {
        if (!!this.props.loggedIn){
            return <Redirect to='/profile' />
        } else {
            return (<Container>
                {this.showError()}

                <Form id="registerForm" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label htmlFor="email-input">Login with your email!</label>
                        <input type="text" id="email-input" name="email" value={this.state.email} placeholder="example@example.com" onChange={this.handleChange} required />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password-input">Enter Your Password!</label><br />
                        <input type="password" id="password-input" name="password" value={this.state.password} placeholder="enter a secure password" onChange={this.handleChange} required /><br />
                    </Form.Field>
                    <Button inverted color="green" position="right" type='submit'>Submit</Button>
                </Form>
                <Divider />

                <h3>Don't have a login?</h3>    
                <NavLink to='register'>Sign Up Here</NavLink>
                
            </Container>)
        }
    }


    render() {
        return (
            <Fragment>
                {this.showLogin()}
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

// export default connect(UserLogin);
export default connect(mapStateToProps, {loginUser})(UserLogin)
