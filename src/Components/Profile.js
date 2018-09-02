import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';
import Player from './Player';
import { Redirect, NavLink } from 'react-router-dom'


class Profile extends Component {
    
    showProfile = () => {
        if (!this.props.loggedIn){
            return <Redirect to="/" />
        } else {
            return (
                <div id='profile'>
                    <header>
                        <img src={this.props.user.profile_image} alt={this.props.username} />
                        <h4>{this.props.user.username}</h4>

                    </header>
                    <p>hey let's listen to some podcasts this is your profile!</p>
                    
                    <NavLink to="/quiz">Make a new Playlist!</NavLink>

                    <Player />
                    <PlaylistContainer />

                </div>
            );
        }
    }
    
    render() {
        return(
            <Fragment>
                {this.showProfile()}
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersReducer: { user, loggedIn } }) => ({
    user,
    loggedIn
})

export default connect(mapStateToProps)(Profile);
