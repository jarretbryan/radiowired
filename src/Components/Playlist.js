import React, { Component, Fragment } from 'react';
import Stream from './Stream';
import StreamAdapter from '../api/StreamAdapter';
import { connect } from 'react-redux';
import {editPlaylist, finishPlaylistEdit, refreshPlaylists} from '../Actions/playlistActions';
import { Card, Divider, Button } from 'semantic-ui-react'
import PlaylistForm from './PlaylistForm';


class Playlist extends Component {

    state = {
        subscriptions: [],
        colors: ['orange', 'olive', 'olive', 'teal', 'blue'],
    }

    componentDidMount(){
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
        this.props.editPL({title: this.props.playlist.title, description: this.props.playlist.description, id: this.props.playlist.id})
    }

    handleDeleteClick = () => {
        StreamAdapter.delete_playlist(this.props.playlist.id)
        .then(() => this.props.finishPL()).then(() => this.props.refresh() ) 
    }

    ifEditing = () => {
        if (this.props.isEditing === true && this.props.id === this.props.playlist.id){
            return (<Card color={this.getRandomColor(this.state.colors)} fluid>
                <PlaylistForm playlistID={this.props.playlist.id} />
                {this.mapSubs()}
            </Card >);
        } else {
            return( 
                <Card color={this.getRandomColor(this.state.colors)} fluid>
                    <Card.Header>
                        <h1>
                            {this.props.playlist.title}
                        </h1>
                    </Card.Header>
                    <Card.Meta >
                        <h3>{this.props.playlist.description}</h3>
                    </Card.Meta>
                    <Button onClick={this.handleEditClick}>Edit</Button>

                    {this.mapSubs()}
                    <Button onClick={this.handleDeleteClick}>Delete</Button>
                </Card >)
        }
    }

    render() {
        return (
            this.ifEditing()
        )
    }
}

const mapStateToProps = ({playlistReducer:{isEditing, title, description, id}}) => ({
    isEditing,
    title,
    description,
    id
})

const mapDispatchToProps = (dispatch) => {
    return{
        editPL: playlistObj => dispatch(editPlaylist(playlistObj)),
        finishPL: () => dispatch(finishPlaylistEdit()),
        refresh: () => dispatch(refreshPlaylists())
    }
}



export default connect (mapStateToProps, mapDispatchToProps)(Playlist);