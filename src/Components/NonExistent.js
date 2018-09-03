import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import radio from '../gifs/Radio-1.2s-200px.gif'; 


class NonExistent extends Component {
    render() {
        return (
            <div>
                <h1>404 Error</h1>
                <img src={radio} alt="404" />
                <h3>This page doesn't exist! </h3>
                <NavLink to='/profile'>Go back!</NavLink>               
            </div>
        );
    }
}

export default NonExistent;
