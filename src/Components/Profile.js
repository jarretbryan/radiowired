import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';
import Player from './Player';
import { Redirect } from 'react-router-dom'
import PlaylistForm from './PlaylistForm';
import AuthWrapper from '../HOComponents/AuthWrapper';
import { Container, Divider, Card, Button, Image } from 'semantic-ui-react'



class Profile extends Component {

    state = {
        makingPlaylist: false
    }

    showNewPlaylistForm = () => {
        if (this.state.makingPlaylist === true) {
            return (
                <Fragment>
                    <PlaylistForm />
                    <Button onClick={this.hidePlaylistForm}>X</Button>
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
            console.log(this.props.user)
            // debugger;
            return <Redirect to="/" />
        } else {
            return (
                <Container id='profile'>
                    <Card centered>
                        
                        <Image src={this.props.user.profile_image} alt={this.props.username} />
                        <Card.Header>       
                            {this.props.user.username}
                        </Card.Header>
                            <Card.Content>
                                <Card.Meta>
                                    This is your profile - make some playlists!
                                </Card.Meta>
                            </Card.Content>

                    </Card>
                   
                    
                    <Button primary onClick={this.makeNewPlaylist}>Make a new Playlist!</Button>

                    {this.showAudioPlayer()}
                    {this.showNewPlaylistForm()}

                    <Divider />

                    <PlaylistContainer />

                </Container>
             );
        }
    }

    
    render() {
        return(
            <Container>
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
