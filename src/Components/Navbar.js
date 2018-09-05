import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
import { logoutUser } from '../Actions/index';
import { Menu, MenuItem, Button } from 'semantic-ui-react'



class Navbar extends Component {
    
    logButton = () => {
        if (!localStorage.loggedIn){
            return(
                <Menu.Item position='right' name='login' >
                    <Button basic inverted color='orange'>
                        <NavLink to='/login'>Login</NavLink>
                    </Button>
                </Menu.Item>   
            ) 
        } else {
            return <Menu.Item position='right' onClick={this.logOut}> 
                <NavLink to='/' >
                    LogOut
                </NavLink>
            </Menu.Item>
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
            <Menu inverted>

                {this.logoLink()} 
            <Menu.Item header> RadioWired </Menu.Item>
                {/* <h1 className="App-title">RadioWired</h1> */}
            <Menu.Item>
                {this.logButton()}
            </Menu.Item>
          
            </Menu>
        );
    }
}

const mapStateToProps = ({ usersReducer: { loggedIn } }) => ({
    loggedIn
})

export default connect(mapStateToProps, {logoutUser})(Navbar);
