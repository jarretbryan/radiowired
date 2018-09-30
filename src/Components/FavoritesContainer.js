
import React, { Component, Fragment } from 'react';
import {Container, Divider, Segment, Message, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import UserAdapter from '../api/UserAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import Stream from './Stream';
import AuthWrapper from '../HOComponents/AuthWrapper';
import Player from './Player';
import { refreshPlaylists } from '../Actions/playlistActions';
import MadeWithLove from './MadeWithLove';





class FavoritesContainer extends Component {

    state = {
        loadingFavorites: true,
        subscriptions: [],
        favorites: []
    }

    componentDidMount() {
        this.loadFavorites()
    }

    componentDidUpdate() {
        if (this.props.justUpdated === true) {
            this.loadFavorites()
            this.props.refresh()
        }
    }

    loadFavorites = () => {
        UserAdapter.getUser(this.props.user.id).then(res => this.setState({
            loadingFavorites: false,
            subscriptions: res.subscriptions,
            favorites: res.favorites
        }))
    }

    mapFavorites = () => {
        let favs = this.state.subscriptions
        return favs.map(
            fav => <Fragment key={fav.id}> <Divider /> <Stream key={fav.id} stream={fav} subscriptions={this.state.subscriptions} favorites={this.state.favorites} />  </Fragment>
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
        } else if (this.state.subscriptions.length === 0){
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
                <Label color='yellow'>
                    <NavLink to='/profile'>Back to your profile!</NavLink>
                </Label>
                {this.showFavorites()}
                {this.showAudioPlayer()}
                <Segment>
                   <MadeWithLove/>
                </Segment>
            </Container>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user }, playerReducer:{visiblePlayer}, playlistReducer:{justUpdated}   }) => ({
    user,
    visiblePlayer,
    justUpdated
})

const mapDispatchToProps = (dispatch) => {
    return {
        refresh: () => dispatch(refreshPlaylists())
    }
}

export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer));
