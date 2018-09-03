import React, { Component, Fragment } from 'react';
import { NavLink, Redirect } from 'react-router-dom' 

class PlaylistForm extends Component {
    
    state = {
        title: '',
        description: '',
        genre: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
 
    render() {
        return (
            <Fragment>

                <form id="playlistForm" >
                    <label htmlFor="title-input">Name Your Playlist!</label> <br />
                    <input type="text" id="title-input" name="title" value={this.state.title} placeholder="e.g. 'stuff i should learn' " onChange={this.handleChange} required /> <br />
                    <label htmlFor="desc-input">Write a description for your playlist!</label><br />
                    <input type="description" id="desc-input" name="description" value={this.state.description} placeholder="enter a secure password" onChange={this.handleChange} required /><br />

                    <label htmlFor="genre-input">What's the theme, genre?!</label><br />
                    <input type="genre" id="genre-input" name="genre" value={this.state.genre} placeholder="e.g. 'finance' " onChange={this.handleChange} required /><br />


                    <input type="submit" />  <br />
                </form>

                <p>Don't have a login?</p>
                <NavLink to='register'>Sign Up Here</NavLink>

            </Fragment>
        );
    }
}

export default PlaylistForm;
