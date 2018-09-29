import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import StreamAdapter from '../api/StreamAdapter';
import radio from '../gifs/Radio-1.2s-200px.gif';
import ReactAudioPlayer from 'react-audio-player';
import { Sidebar, Image, Divider, Menu, Modal, Header, Button, Icon } from 'semantic-ui-react'



class Player extends Component {

    state = {
        episode_title: "",
        description:"",
        audio: "",
        audio_length: null,
        loading: true,
        modalOpen: false

    }

    componentDidMount(){
        StreamAdapter.get_episodes(this.props.streamId)
        .then(res => this.setState({
            episode_title: res.latest_episode['title'],
            description: res.latest_episode['description'],
            audio: res.latest_episode['audio'],
            audio_length: res.latest_episode['audio_length']   
        }))
    }

    componentDidUpdate(){
        if (this.state.loading === true){
            this.setState({
                loading:false
            })
        }
    }

    componentWillUnmount(){
        StreamAdapter.delete_episodes()
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    // this is kind of a makeshift way of handling the CORS error - it's not airtight and I need to revisit the error handling of the ReactAudioPlayer component
    handleCorsError = (event) => {
        if(event.target.error.message.length < 1){
            console.log('likely a CORS error')
            this.handleOpen()
        } 
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

                <Modal
                    trigger={<ReactAudioPlayer
                        src={this.state.audio}
                        autoPlay
                        controls
                        onError={(event) => this.handleCorsError(event)}
                    />}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                            <Header icon='file audio' content='Cross Origin Resource Sharing Error!' />
                            <Modal.Content>
                                <h3>Sometimes Podcast audio is designed to only be accessible from the publisher's website, and unfortunately, this is one of those instances! We don't have access to this one! Sorry!</h3>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red' onClick={this.handleClose} inverted>
                                    <Icon name='eject' /> Ok....
                                </Button>
                            </Modal.Actions>



                </Modal>
                    



                <Divider />
                    <p dangerouslySetInnerHTML={{__html: this.state.description}}></p>
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
