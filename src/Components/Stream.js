import React from 'react'
import { connect } from 'react-redux';
import {showPlayer, hidePlayer} from '../Actions/playerActions';

const Stream = (props) => {
    if (props.visiblePlayer === false){
    return (<div>
        <h4>{props.stream.title}</h4>
        <img onClick={() => props.showPlayer(props.stream.ep_id)} src={props.stream.thumbnail} alt={props.stream.title} />
        <p>{props.stream.description}</p>
    </div>)
    } else {
        return (<div>
            <h4>{props.stream.title}</h4>
            <img onClick={props.hidePlayer} src={props.stream.thumbnail} alt={props.stream.title} />
            <p>{props.stream.description}</p>
        </div>)
    }
}


const mapStateToProps = ({ playerReducer: { visiblePlayer, streamId }}) => ({
    visiblePlayer,
    streamId
})


const mapDispatchToProps = (dispatch) => {
    return {
        showPlayer: (num) => dispatch(showPlayer(num)),
        // // showAudio: () => dispatch(showPlayer()),
        hidePlayer: () => dispatch(hidePlayer())
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Stream)