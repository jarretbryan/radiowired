import React, { Component } from 'react';
import Stream from './Stream';
import StreamAdapter from '../api/StreamAdapter';
import { Card, Divider } from 'semantic-ui-react'


class Playlist extends Component {

    state = {
        subscriptions: [],
        colors: ['orange', 'olive', 'olive', 'teal', 'blue']
    }

    componentDidMount(){
        // console.log(this.props)
        this.getSubs()
    }

    getRandomColor = colorArr => {
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    }

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
            <Card color={this.getRandomColor(this.state.colors)} fluid>
                <Card.Header>
                    <h1>
                        {this.props.playlist.title}
                    </h1>
                </Card.Header>
                <Card.Content>
                <p>{this.props.playlist.description}</p>
                </Card.Content>
                {/* <h1>{this.props.playlist.id}</h1> */}
                {this.mapSubs()}
                <Divider />
            </Card >
        );
    }
}

export default Playlist;