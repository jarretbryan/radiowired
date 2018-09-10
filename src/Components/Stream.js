import React from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';
import { Divider } from 'semantic-ui-react'


const Stream = (props) => {
    if (props.visiblePlayer === false){
    return (<div>
        <h4>{props.stream.title}</h4>
        <img onClick={() => props.showPlayer({
            streamId: props.stream.ep_id,
            thumbnail:props.stream.thumbnail,
            streamTitle: props.stream.title
        })} src={props.stream.thumbnail} alt={props.stream.title} />
        <p>{props.stream.description}</p>
    </div>)
    } else {
        return (<div>
            
            <Divider />
            <h3>{props.stream.title}</h3>
            <img onClick={props.hidePlayer} src={props.stream.thumbnail} alt={props.stream.title} />
            
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