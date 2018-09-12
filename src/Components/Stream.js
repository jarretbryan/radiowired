import React from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';
import { Divider, Icon, Popup } from 'semantic-ui-react'
import FavoriteAdapter from '../api/FavoriteAdapter';



const likeStream = (userId, subId) => {
    // adapter to post and create favorite with user id and subscription id
    FavoriteAdapter.postFavorite({user_id: userId, subscription_id: subId })

    // maybe add action to change playlistReducer state justupdated to true - this should force rerender to change heart
}

const likeButton = (props) => {
    if (!!props.user.subscriptions.filter(el => el.id === props.stream.id)[0]){
        return <Icon color='red' size='large' name='heart' />
    } else {
        return( 
            <Popup
                trigger={<Icon color='red' size='large' name='heart outline' onClick={() => likeStream(props.user.id, props.stream.id)} />}
                content={<p>Added to you favorites!</p>}
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


const mapStateToProps = ({ usersReducer: {user}, playerReducer: { visiblePlayer, streamId, thumbnail, streamTitle }}) => ({
    user,
    visiblePlayer,
    streamId,
    thumbnail,
    streamTitle
})


const mapDispatchToProps = (dispatch) => {
    return {
        showPlayer: (num) => dispatch(showPlayer(num)),
        // // showAudio: () => dispatch(showPlayer()),
        hidePlayer: () => dispatch(hidePlayer())
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Stream)