import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistContainer from './PlaylistContainer';


class Profile extends Component {
    render() {
        return (
            <div id='profile'>
                <header>
                    <img src={this.props.user.profile_image}alt={this.props.username} />
                    <h4>{this.props.user.username}</h4>
                    
                </header>
                <p>hey let's listen to some podcasts this is your profile!</p>
                <PlaylistContainer />
                
            </div>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user } }) => ({
    user
})

export default connect(mapStateToProps)(Profile);
