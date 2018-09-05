import React, { Component, Fragment } from 'react';
import Playlist from './Playlist';
import { connect } from 'react-redux';
import UserAdapter from '../api/UserAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import { Grid } from 'semantic-ui-react'



// for the sake of the first draft, where we don't have a user in store, i will need to fake seed data somewhere so we know which user to render.

// after we refactor and have a user in state, then this will just pull the playlists that are nested in the user object


class PlaylistContainer extends Component {

    // temporary, just to build the component
    // rather than getting playlists from the user props, fetch every time. 
    state = {
        loadingsPlaylists: true,
        playlists: [],
        colors: ['orange', 'olive', 'olive', 'teal', 'blue']
    }


    componentDidMount(){
        // debugger;
        UserAdapter.getUser(this.props.user.id).then(res => this.setState({
            loadingsPlaylists: false,
            playlists: res.playlists
        }))
    }

    getRandomColor = colorArr => {
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    }

    mapPlaylists = () => {
        let userPlaylistArr = this.state.playlists
        return userPlaylistArr.map(
            playlist => <Grid.Column color={this.getRandomColor(this.state.colors)}>
                <Playlist key={playlist.id} playlist={playlist} /> 
            </Grid.Column> 
        )
    }

    showPlaylists = () => {
        if (this.state.loadingsPlaylists === true){
            return (
                <Fragment>
                    <img src={radio} alt="loading!" />
                    <p> Checking</p>
                </Fragment>
        )
        } else {
            return (<Grid.Row id='playlist-card'>
                {this.mapPlaylists()}
            </Grid.Row>)
        }
    }
 
    render() {
        return (
            <Grid columns={3} divided>
                {this.showPlaylists()}
            </Grid>
            
        );
    }
}

const mapStateToProps = ({ usersReducer: { user } }) => ({
    user
})

export default connect (mapStateToProps)(PlaylistContainer);

