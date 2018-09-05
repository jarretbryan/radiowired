import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import StreamAdapter from '../api/StreamAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
// import audio from {this.state.audio}
import ReactAudioPlayer from 'react-audio-player';


class Player extends Component {

    state = {
        episode_title: "",
        description:"",
        audio: "",
        audio_length: null,
        loading: true

    }

    componentDidMount(){
        StreamAdapter.get_episodes(this.props.streamId)
        .then(res => this.setState({
            epside_title: res.latest_episode.title,
            description: res.latest_episode.description,
            audio: res.latest_episode.audio,
            audio_length: res.latest_episode.audio_length   
        }))
        // this will have a fetch GET request to my API, which wil get from the third party api 
        //streamAdapter.get_episodes(this.props.streamID).then(() => this.setState......)
    }

    componentDidUpdate(){
        if (this.state.loading === true){
            this.setState({
                loading:false
            })
        }
    }

    componentWillUnmount(){
        // this will have a fetch delete request which will just delete everything on my backend with this stream id
        StreamAdapter.delete_episodes()
    }

    showAudio = () => {
        if (this.props.loading === true){
            return <img src={radio} alt="loading" />
        } else {
            return (
                <Fragment>

                    <h3>{this.state.episode_title}</h3>
                    <p>{this.state.description}</p>

                    <ReactAudioPlayer
                        src={this.state.audio} 
                        autoPlay
                        controls
                    />
                    {/* <audio controls="controls">
                        <source src={this.state.audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
            </audio> */}
                </Fragment>
            )
        }
    }


    render() {
        return(
            <Fragment>
                {this.showAudio()}
            </Fragment>
        )
        
    }
}

const mapStateToProps = ({playerReducer:{streamId}}) => ({
    streamId
})

export default connect(mapStateToProps)(Player);
