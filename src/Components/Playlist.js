import React, { Component } from 'react';
import Stream from './Stream';
import name from '../api/StreamAdapter';
import StreamAdapter from '../api/StreamAdapter';

class Playlist extends Component {

    state = {
        playlistURL: 'http://localhost:4000/api/v1/playlists/',
        subscriptions: []
    }

    componentDidMount(){
        console.log(this.props)
        this.getSubs()
    }

    // this has to be abstracted to an adapter    
    getSubs = () => {
        StreamAdapter.stream_index(this.props.playlist.id)
        .then(res => this.setState({
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
                {/* <h1>{this.props.playlist.id}</h1> */}
                {this.mapSubs()}
            </div >
        );
    }
}

export default Playlist;