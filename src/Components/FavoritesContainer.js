
import React, { Component, Fragment } from 'react';
import {Container, Divider, Button, Message } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import UserAdapter from '../api/UserAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import Stream from './Stream';
import AuthWrapper from '../HOComponents/AuthWrapper';
import Player from './Player';





class FavoritesContainer extends Component {

    state = {
        loadingFavorites: true,
        favorites: []
    }

    componentDidMount() {
        this.loadFavorites()
    }

    loadFavorites = () => {
        UserAdapter.getUser(this.props.user.id).then(res => this.setState({
            loadingFavorites: false,
            favorites: res.subscriptions
        }))
    }

    mapFavorites = () => {
        let favs = this.state.favorites
        return favs.map(
            fav => <Fragment key={fav.id}> <Divider /> <Stream key={fav.id} stream={fav} />  </Fragment>
        )
    }

    showFavorites = () => {
        if (this.state.loadingFavorites === true) {
            return (
                <Fragment>
                    <img src={radio} alt="loading!" />
                    <p> Checking</p>
                </Fragment>
            )
        } else if (this.state.favorites.length === 0){
            return(
                    <Message info>
                        <Message.Header> You don't have any favorites!</Message.Header>
                        <p>Go back to your profile and make a playlist to discover some new ones!</p>
                    </Message>
            )
        } else {
            return (
                <Fragment>
                    {this.mapFavorites()}
                </Fragment>)
        }
    }

    showAudioPlayer = () => {
        if (this.props.visiblePlayer === true) {
            return <Player />
        } else {
            return null
        }
    }

    render() {
        return (
            <Container>
                <Button color='yellow'>
                    <NavLink to='/profile'>Back to your profile!</NavLink>
                </Button>
                {this.showFavorites()}
                {this.showAudioPlayer()}
            </Container>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user }, playerReducer:{visiblePlayer}}) => ({
    user,
    visiblePlayer
})

export default AuthWrapper(connect(mapStateToProps)(FavoritesContainer));
