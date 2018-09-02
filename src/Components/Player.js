import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (
            <audio controls>
                <source src="" type="audio/mpeg"/>
                        Your browser does not support the audio element.
            </audio>
        );
    }
}

export default Player;
