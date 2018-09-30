import React, { Component } from 'react';
import apiLogo from '../gifs/api-transparent background for white background.png';
import { Label } from 'semantic-ui-react'


class MadeWithLove extends Component {
    render() {
        return (
            <Label as='a' image>
                <img src={apiLogo} alt="ListenNotes" />
                <Label.Detail>Made with ♥️ at the Flatiron School by <a href='https://www.github.com/jarretbryan'>jarretbryan</a>   </Label.Detail>
            </Label>
        );
    }
}

export default MadeWithLove;
