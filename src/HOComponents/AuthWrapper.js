import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import * as actions from '../actions'
import  * as actions from '../Actions/index';
import radio from '../gifs/Radio-1.2s-200px.gif'; 
import { authenticatingUser } from '../Actions/index';



const AuthWrapper = WrappedComponent => {
    class AuthorizedComponent extends React.Component {
        componentDidMount() {
            // POTENTIAL SECURITY FLAW!!! my tokens don't expire
            if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
        }

        render() {
            // debugger;
            if (localStorage.getItem('jwt') && this.props.loggedIn) {
                return <WrappedComponent />
            } else if (localStorage.getItem('jwt') && this.props.checkingAuth) {
                return <img src={radio} />
            } else {
                return <Redirect to="/" />
            }
        }
    }

    return connect(
        mapStateToProps,
        actions
    )(AuthorizedComponent)
}

const mapStateToProps = ({ usersReducer: { loggedIn, checkingAuth } }) => ({
    loggedIn,
    checkingAuth
})

export default AuthWrapper
