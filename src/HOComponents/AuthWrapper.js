import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import  * as actions from '../Actions/index';
import radio from '../gifs/Radio-1.2s-200px.gif'; 



const AuthWrapper = WrappedComponent => {
    class AuthorizedComponent extends React.Component {
        componentDidMount() {
            if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
        }

        render() {
            if (localStorage.getItem('jwt') && this.props.loggedIn) {
                return <WrappedComponent />
            } else if (localStorage.getItem('jwt') && this.props.checkingAuth) {
                return <img src={radio} alt="loading" />
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
