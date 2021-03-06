import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';
import Player from './Player';
import { Redirect } from 'react-router-dom'
import PlaylistForm from './PlaylistForm';
import AuthWrapper from '../HOComponents/AuthWrapper';
import { Container, Divider, Button, Icon, Segment } from 'semantic-ui-react'
import MadeWithLove from './MadeWithLove';


class Profile extends Component {

    state = {
        makingPlaylist: false,
        redirect:false
    }

    prepRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect === true) {
            return <Redirect to="/favorites" />
        }
    }

    showNewPlaylistForm = () => {
        if (this.state.makingPlaylist === true) {
            return (
                <Fragment>
                    <PlaylistForm />
                    <br/>
                    <Button compact onClick={this.hidePlaylistForm}>close</Button>
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

    showAudioPlayer = () => {
        if (this.props.visiblePlayer === true){
            return <Player />
        } else {
            return null
        }
    }
    
    showProfile = () => {
        if (!localStorage.loggedIn){
            return <Redirect to="/" />
        } else {
            return (
            <Fragment>
                <Container id='profile'>  
                    <Button primary onClick={this.makeNewPlaylist}>Make a new Playlist!</Button>
                     
                    <Button color='red' onClick={this.prepRedirect}><Icon name='heart' />See Favorites!</Button>
                    

                    {this.showAudioPlayer()}
                    {this.showNewPlaylistForm()}

                    <Divider />

                    <PlaylistContainer />         
                </Container>
                    <Segment>
                        <MadeWithLove />
                    </Segment>
            </Fragment>
             );
        }
    }
   
    render() {
        return(
            <Container>
                {this.renderRedirect()}
                {this.showProfile()}
            </Container>
        )
    }
}

const mapStateToProps = ({ usersReducer: { user, loggedIn }, playerReducer:{ visiblePlayer } }) => ({
    user,
    loggedIn,
    visiblePlayer
})

export default AuthWrapper(connect(mapStateToProps)(Profile));
