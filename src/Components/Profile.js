import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';
import Player from './Player';
import { Redirect } from 'react-router-dom'
import PlaylistForm from './PlaylistForm';
import AuthWrapper from '../HOComponents/AuthWrapper';


class Profile extends Component {

    state = {
        makingPlaylist: false
    }

    showNewPlaylistForm = () => {
        if (this.state.makingPlaylist === true) {
            return (
                <Fragment>
                    <PlaylistForm />
                    <button onClick={this.hidePlaylistForm}>X</button>
                </Fragment>
            )
        } else {
            return null
        }
    }

    makeNewPlaylist = () => {
        this.setState({
            makingPlaylist: true
        })
    }

    hidePlaylistForm = () => {
        this.setState({
            makingPlaylist: false
        })
    }
    
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
                    
                    <button onClick={this.makeNewPlaylist}>Make a new Playlist!</button>

                    <Player />
                    {this.showNewPlaylistForm()}
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

export default AuthWrapper(connect(mapStateToProps)(Profile));
