import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
import { logoutUser } from '../Actions/index';


class Navbar extends Component {
    
    logButton = () => {
        if (!localStorage.loggedIn){
            return(
                <button>
                    <NavLink to='/login'>Login</NavLink>
                </button>   
            ) 
        } else {
            return <button onClick={this.logOut}> 
                <NavLink to='/' >
                    LogOut
                </NavLink>
            </button>
        }
    }
    
    logOut = () => {
            localStorage.clear()
            this.props.logoutUser()
    }

    logoLink = () => {
        if (!!localStorage.loggedIn){
            return <NavLink to='/profile'><img src="http://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Misc-RSS-icon.png" className="App-logo" alt="logo" /> </NavLink>
        } else {
            return <NavLink to='/'><img src="http://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Misc-RSS-icon.png" className="App-logo" alt="logo" /> </NavLink>
        }
    }
    
    render() {
        return (
            <Fragment>

            <header className="App-header">
                {this.logoLink()} 
                <h1 className="App-title">RadioWired</h1>
                {this.logButton()}
            </header>
          
            </Fragment>
        );
    }
}

const mapStateToProps = ({ usersReducer: { loggedIn } }) => ({
    loggedIn
})

export default connect(mapStateToProps, {logoutUser})(Navbar);
