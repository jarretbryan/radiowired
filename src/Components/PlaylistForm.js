import React, { Component, Fragment } from 'react';
import { NavLink, Redirect } from 'react-router-dom' 
import { connect } from 'react-redux';
import StreamAdapter from '../api/StreamAdapter';
import { finishPlaylistEdit } from '../Actions/playlistActions';

class PlaylistForm extends Component {
    
    state = {
        title: '',
        description: '',
        redirect: false
    }

    componentDidMount(){
        if (this.props.isEditing === true && this.props.id===this.props.playlistID){
            this.setState({
                title: this.props.title,
                description: this.props.description
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    prepRedirect = () => {
        this.setState({
            redirect:true
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const submitObj = {
            title: this.state.title,
            description: this.state.description,            user_id: this.props.user.id,
            playlist_id: this.props.playlistID
        }

        if (this.props.isEditing === false){
            StreamAdapter.post_playlist(submitObj)
            this.prepRedirect()
        } else {
            StreamAdapter.edit_playlist(submitObj).then(() => { 
                this.props.closeEdit()
            } )
        }
    }

    renderRedirect = () => {
        if (this.state.redirect===true){
            return <Redirect to="quiz" />
        }
    }
    
 
    render() {
        return (
            <Fragment>
                {this.renderRedirect()}
                <form id="playlistForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="title-input">Name Your Playlist!</label> <br />
                    <input type="text" id="title-input" name="title" value={this.state.title} placeholder="e.g. 'stuff i should learn' " onChange={this.handleChange} required /> <br />
                    <label htmlFor="desc-input">Write a description for your playlist!</label><br />
                    <input type="description" id="desc-input" name="description" value={this.state.description} placeholder=" 'podcasts about stuff i should learn' " onChange={this.handleChange} required /><br />



                    <input type="submit" />  <br />
                </form>

            </Fragment>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user }, playlistReducer: { isEditing, title, description, id } } ) => ({
    user,
    isEditing,
    title,
    description,
    id
})

const mapDispatchToProps = (dispatch) => {
    return {
        closeEdit: () => dispatch(finishPlaylistEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PlaylistForm);
