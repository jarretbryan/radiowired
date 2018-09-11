
import React, { Component, Fragment } from 'react';
import {Container, Divider, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import UserAdapter from '../api/UserAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import Stream from './Stream';




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
        } else {
            return (
                <Fragment>
                    {this.mapFavorites()}
                </Fragment>)
        }
    }





    render() {
        return (
            <Container>
                <Button color='yellow'>
                    <NavLink to='/profile'>Back to your profile!</NavLink>
                </Button>
                {this.showFavorites()}
            </Container>
        );
    }
}

const mapStateToProps = ({ usersReducer: { user }}) => ({
    user
})

export default connect (mapStateToProps)(FavoritesContainer);
