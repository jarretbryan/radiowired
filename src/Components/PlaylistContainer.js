import React, { Component } from 'react';
import Playlist from './Playlist';
import { connect } from 'react-redux';


// for the sake of the first draft, where we don't have a user in store, i will need to fake seed data somewhere so we know which user to render.

// after we refactor and have a user in state, then this will just pull the playlists that are nested in the user object


class PlaylistContainer extends Component {

    // temporary, just to build the component

    mapPlaylists = () => {
        let userPlaylistArr = this.props.user.playlists
        console.log(userPlaylistArr)
        return userPlaylistArr.map(
            playlist => <Playlist key={playlist.id} playlist={playlist} /> 
        )
    }
 
    render() {
        return (
            <div id='playlist-card'>
                {this.mapPlaylists()}
            </div>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user } }) => ({
    user
})

export default connect (mapStateToProps)(PlaylistContainer);

