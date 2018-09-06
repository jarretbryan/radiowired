import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import StreamAdapter from '../api/StreamAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
// import audio from {this.state.audio}
import ReactAudioPlayer from 'react-audio-player';
import { Card, Sidebar, Image, Divider, Menu } from 'semantic-ui-react'



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
            episode_title: res.latest_episode['title'],
            description: res.latest_episode['description'],
            audio: res.latest_episode['audio'],
            audio_length: res.latest_episode['audio_length']   
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
               
                <Sidebar as={Menu} inverted vertical animation='overlay' direction='right' visible={true}  >
                 
                  
                <Menu.Item>
                        <h1>{this.props.streamTitle}</h1>
                        <h4>{this.state.episode_title}</h4>
                </Menu.Item>       
                    
                <Menu.Item>

                    <Image src={this.props.thumbnail} centered /> 
                </Menu.Item>
                <Menu.Item>

                  
                    <ReactAudioPlayer
                        src={this.state.audio} 
                        autoPlay
                        controls
                        />
                        <Divider />

                        <p>{this.state.description}</p>
                    </Menu.Item>
               
               <Menu.Item>

                <h6> Audio Not Playing? Some Podcast Audio is designed to only be accessible from the publisher's website - if it doesn't play after a few seconds, we might not have access to it. Sorry!</h6>
               </Menu.Item>
              

                </Sidebar>
                
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

const mapStateToProps = ({playerReducer:{streamId, thumbnail, streamTitle}}) => ({
    streamId,
    thumbnail,
    streamTitle
})

export default connect(mapStateToProps)(Player);
