import React, {Component} from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';
import { finishPlaylistEdit, refreshPlaylists } from '../Actions/playlistActions';

import { Divider, Icon, Popup } from 'semantic-ui-react'
import FavoriteAdapter from '../api/FavoriteAdapter';

// i wrote this as a functional component, but may have to refactor to class based

class Stream extends Component {

    state = {
        heartStatus: 'heart outline',
        message: 'Removed from Favorites!'
    }
    
    componentDidMount(){
        if (!!this.props.subscriptions.filter(el => el.id === this.props.stream.id)[0]){
            this.setState({
                heartStatus: 'heart',
                message: 'Added to Favorites!'
            })
        }
    }

    likeStream = (userId, subId) => {
        if (this.state.heartStatus === 'heart outline') {
            FavoriteAdapter.postFavorite({ user_id: userId, subscription_id: subId }).then(this.setState({
                heartStatus: 'heart',
                message: 'Added to Favorites!'
            }))
            .then(() => {this.props.finishPL()})
        } else {
            // debugger;
            let favorite = this.props.subscriptions.filter(el => el.id === this.props.stream.id)
            // debugger;
            let num = favorite[0].id
            
            let fav_num = this.props.user.favorites.filter(el => el.subscription_id === num)[0].id


            FavoriteAdapter.deleteFavorite(fav_num).then(this.setState({
                heartStatus: 'heart outline',
                message: 'Removed from Favorites!'
            }))
        }

        // attempting to prevent duplicate likes - no dice
    }

    likeButton = () => {
        return (<Popup
            trigger={<Icon color='red' size='large' name={this.state.heartStatus} onClick={() => this.likeStream(this.props.user.id, this.props.stream.id, this.props)} />}
            content={this.state.message}
            on='click'
            position='top right'
        />)
    }

    render(){
    if (this.props.visiblePlayer === false){
    return (<div>
        <h4>{this.props.stream.title}</h4>
        <img src={this.props.stream.thumbnail} alt={this.props.stream.title} /><br/>
        <Icon bordered inverted color='blue' name="play" size="small" onClick={() => this.props.showPlayer({
            streamId: this.props.stream.ep_id,
            thumbnail: this.props.stream.thumbnail,
            streamTitle: this.props.stream.title
        })}  />
        {this.likeButton(this.props)}
        <p dangerouslySetInnerHTML={{__html: this.props.stream.description}}></p>
    </div>)
    } else {
        return (<div>
            
            <Divider />
            <h3>{this.props.stream.title}</h3>
            <img src={this.props.stream.thumbnail} alt={this.props.stream.title} /><br/>
            <Icon inverted color='red' size="big" name='stop circle' onClick={this.props.hidePlayer} />
            
            <p>{this.props.stream.description}</p>
        </div>)
    }
}
}


const mapStateToProps = ({ usersReducer: {user}, playerReducer: { visiblePlayer, streamId, thumbnail, streamTitle }, playlistReducer: {justUpdated}  }) => ({
    user,
    visiblePlayer,
    streamId,
    thumbnail,
    streamTitle,
    justUpdated
})


const mapDispatchToProps = (dispatch) => {
    return {
        showPlayer: (num) => dispatch(showPlayer(num)),
        // // showAudio: () => dispatch(showPlayer()),
        hidePlayer: () => dispatch(hidePlayer()),
        finishPL: () => dispatch(finishPlaylistEdit()),
        refresh: () => dispatch(refreshPlaylists())
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Stream)