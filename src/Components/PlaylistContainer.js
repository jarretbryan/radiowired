import React, { Component, Fragment } from 'react';
import Playlist from './Playlist';
import { connect } from 'react-redux';
import UserAdapter from '../api/UserAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import { Grid, Card } from 'semantic-ui-react'
import { refreshPlaylists } from '../Actions/playlistActions';


class PlaylistContainer extends Component {

    state = {
        loadingsPlaylists: true,
        playlists: [],
        subscriptions:[],
        favorites:[]
    }


    componentDidMount(){
        this.loadPlaylists()  
    }

    componentDidUpdate(){
        // console.log('playlist updated')
        if (this.props.justUpdated === true){
            console.log(this.props.justUpdated)
            this.loadPlaylists()
            this.props.refresh()
        }
    }

    loadPlaylists = () =>{
        // console.log('refreshing...')
        UserAdapter.getUser(this.props.user.id).then(res => this.setState({
            loadingsPlaylists: false,
            subscriptions: res.subscriptions,
            favorites: res.favorites,
            playlists: res.playlists.sort((el1, el2) => {
                if (el1.created_at < el2.created_at)
                    return 1;
                if (el1.created_at > el2.created_at )
                    return -1;
                return 0    
            })
        }))
    }


    mapPlaylists = () => {
        let userPlaylistArr = this.state.playlists
        return userPlaylistArr.map(
            playlist => <Grid.Column key={playlist.id} >
            <Card.Group>
                <Playlist key={playlist.id} playlist={playlist} subscriptions={this.state.subscriptions} favorites={this.state.favorites} /> 
            </Card.Group>
            </Grid.Column> 
        )
    }

    showPlaylists = () => {
        if (this.state.loadingsPlaylists === true){
            return (
                <Fragment>
                    <img src={radio} alt="loading!" />
                    <p> Checking</p>
                </Fragment>
        )
        } else {
            return (
                <Fragment>
                    {this.mapPlaylists()}
                </Fragment>)
        }
    }
 
    render() {
        return (
            <Grid columns={3} divided>
                {this.showPlaylists()}
            </Grid>
            
        );
    }
}

const mapStateToProps = ({ usersReducer: { user }, playlistReducer: {justUpdated} }) => ({
    user,
    justUpdated
})

const mapDispatchToProps = (dispatch) => {
    return {
        refresh: () => dispatch(refreshPlaylists())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(PlaylistContainer);

