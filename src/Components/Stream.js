import React from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';
import { Divider, Icon } from 'semantic-ui-react'


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
        <Icon color='red' size='large' name='heart outline' />
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


const mapStateToProps = ({ playerReducer: { visiblePlayer, streamId, thumbnail, streamTitle }}) => ({
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