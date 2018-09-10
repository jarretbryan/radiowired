import React, { Component, Fragment } from 'react';
import Stream from './Stream';
import StreamAdapter from '../api/StreamAdapter';
import { Card, Divider, Button, Form } from 'semantic-ui-react'
import PlaylistForm from './PlaylistForm';


class Playlist extends Component {

    state = {
        subscriptions: [],
        colors: ['orange', 'olive', 'olive', 'teal', 'blue'],
        editing: false
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
        return this.state.subscriptions.map(stream => <Fragment key={stream.id}><Divider /> <Stream key={stream.id} stream={stream} /></Fragment>)
    }

    handleEditClick = () => {
        this.setState({
            editing:true
        })
    }

    ifEditing = () => {
        if (this.state.editing === false){
            return (
                <Card color={this.getRandomColor(this.state.colors)} fluid>
                    <Card.Header>
                        <h1>
                            {this.props.playlist.title}
                        </h1>
                    </Card.Header>
                    <Card.Meta >
                        <h3>{this.props.playlist.description}</h3>
                    </Card.Meta>

                    {this.mapSubs()}

                    <Button onClick={this.handleEditClick}>Edit</Button>
                </Card >
            );
        } else {
            return <Card color={this.getRandomColor(this.state.colors)} fluid>
                <PlaylistForm />

                {this.mapSubs()}

            </Card > 
        }
    }




    render() {
        return (
            this.ifEditing()
        )
    }
}

export default Playlist;