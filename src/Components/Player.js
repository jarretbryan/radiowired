import React, { Component } from 'react';
import { connect } from 'react-redux';


class Player extends Component {

    state = {
        title: "",
        episode_title: "",
        thumbnail: "",
        loading: true

    }

    componentDidMount(){
        // this will have a fetch GET request to my API, which wil get from the third party api 
        //streamAdapter.get_episodes(this.props.streamID).then(() => this.setState......)
    }

    componentWillUnmount(){
        // this will have a fetch delete request which will just delete everything on my backend with this stream id
    }


    render() {
        return (
            <audio controls>
                <source src="" type="audio/mpeg"/>
                        Your browser does not support the audio element.
            </audio>
        );
    }
}

const mapStateToProps = ({playerReducer:{streamId}}) => ({
    streamId
})

export default connect(mapStateToProps)(Player);
