import React, { Component } from 'react';
import Stream from './Stream';

class Playlist extends Component {

    state = {
        playlistURL: 'http://localhost:4000/api/v1/playlists/',
        subscriptions: []
    }

    componentDidMount(){
        this.getSubs()
    }

    // this has to be abstracted to an adapter    
    getSubs = () => {
        fetch(`${this.state.playlistURL}/${this.props.playlist.id}`).then(res => res.json()).then(res => this.setState({
            subscriptions: res.subscriptions
        }) )
    }

    mapSubs = () => {
       return this.state.subscriptions.map(stream => <Stream key={stream.id} stream={stream} />)
    }

    render() {
        return (
            <div>
                <h1>{this.props.playlist.title}</h1>
                <p>{this.props.playlist.description}</p>
                <h1>{this.props.playlist.id}</h1>
                {this.mapSubs()}
            </div >
        );
    }
}

export default Playlist;