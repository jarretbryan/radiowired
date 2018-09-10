import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
import { logoutUser } from '../Actions/index';
import { Menu, Button, Search, Label, Image, Icon } from 'semantic-ui-react'
import SearchBox from './SearchBox';



class Navbar extends Component {
    
    logButton = () => {
        if (!localStorage.loggedIn){
            return(
               
                    <Button basic >
                        <NavLink to='/login'>Login</NavLink>
                    </Button> 
            ) 
        } else {
            return <Button basic onClick={this.logOut}> 
                <NavLink to='/' >
                    LogOut
                </NavLink>
            </Button>
        }
    }

    profileInfo = () => {
        if (!!localStorage.loggedIn && !!this.props.user){
            return( 
            <Menu.Item>  
            <Label color='blue' image>
                <Image avatar spaced="right" src={this.props.user.profile_image} />
                {this.props.user.username}
                        <Label.Detail> 
                            <Icon fitted name='podcast' /> 
                        </Label.Detail>
            </Label>
            </Menu.Item>  )
        }
    }


    searchField = () => {
        if (!!localStorage.loggedIn){
            return(        
                <Menu.Item position="right">    
                    <SearchBox />
                </Menu.Item>     
            )
        } else {
            return null
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
           
            {this.profileInfo()}
            {this.searchField()}
            <Menu.Item position='right'>
                {this.logButton()}
            </Menu.Item>
            </Menu>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user, loggedIn } }) => ({
    user,
    loggedIn
})

export default connect(mapStateToProps, {logoutUser})(Navbar);
