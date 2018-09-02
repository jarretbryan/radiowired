import React, { Component } from 'react';
import Playlist from './Playlist';

// for the sake of the first draft, where we don't have a user in store, i will need to fake seed data somewhere so we know which user to render.

// after we refactor and have a user in state, then this will just pull the playlists that are nested in the user object


class PlaylistContainer extends Component {

    // temporary, just to build the component
    state = {
        playlists: [
            {
                "id": 1,
                "title": "Just for Laughs",
                "description": "I just want to Laugh!",
                "genre": "Comedy",
                "user_id": 1
            },
            {
                "id": 2,
                "title": "Stock Options",
                "description": "On my Warren Buffet",
                "genre": "Investing",
                "user_id": 1
            }
        ]
    }

    mapPlaylists = () => {
        return this.state.playlists.map(
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

export default PlaylistContainer;

