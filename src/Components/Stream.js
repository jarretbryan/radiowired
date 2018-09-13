import React from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';
import { finishPlaylistEdit, refreshPlaylists } from '../Actions/playlistActions';

import { Divider, Icon, Popup } from 'semantic-ui-react'
import FavoriteAdapter from '../api/FavoriteAdapter';



const likeStream = (userId, subId, props) => {
    if (props.user.subscriptions.filter(el => el.id === subId).length === 0){
        FavoriteAdapter.postFavorite({user_id: userId, subscription_id: subId }).then(props.finishPL()).then(props.refresh())
    } else {
        console.log('already liked!')
    }
        
   // attempting to prevent duplicate likes - no dice
}

const unlikeStream = (props) => {

    let favorite = props.user.favorites.filter(el => el.subscription_id === props.stream.id)
    let num = favorite[0].id
    FavoriteAdapter.deleteFavorite(num)
}

const likeButton = (props) => {
    if (!!props.user.subscriptions.filter(el => el.id === props.stream.id)[0]){
        return (
            <Popup
                trigger={<Icon color='red' size='large' name='heart' onClick={() => unlikeStream(props)} /> }
                content={<p>Unliked!</p>}
                on='click'
                position='top right'
            /> ) 
    } else {
        return( 
            <Popup
                trigger={<Icon color='red' size='large' name='heart outline' onClick={() => likeStream(props.user.id, props.stream.id, props)} />}
                content={<p>Added to your favorites!</p>}
                on='click'
                position='top right'
        />) 
    }
}


const Stream = (props) => {

    if (props.visiblePlayer === false){
    return (<div>
        <h4>{props.stream.title}</h4>
        <img src={props.stream.thumbnail} alt={props.stream.title} /><br/>
        <Icon bordered inverted color='blue' name="play" size="small" onClick={() => props.showPlayer({
            streamId: props.stream.ep_id,
            thumbnail: props.stream.thumbnail,
            streamTitle: props.stream.title
        })}  />
        {likeButton(props)}
        <p>{props.stream.description}</p>
    </div>)
    } else {
        return (<div>
            
            <Divider />
            <h3>{props.stream.title}</h3>
            <img src={props.stream.thumbnail} alt={props.stream.title} /><br/>
            <Icon inverted color='red' size="big" name='stop circle' onClick={props.hidePlayer} />
            
            <p>{props.stream.description}</p>
        </div>)
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