import React, { Component, Fragment } from 'react';

class Navbar extends Component {
    render() {
        return (
            <Fragment>

            <header className="App-header">
                <img src="http://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Misc-RSS-icon.png" className="App-logo" alt="logo" />
                <h1 className="App-title">RadioWired</h1>
            </header>
            <p className="App-intro">
                This will be a podcast curation App
             </p>
            </Fragment>
        );
    }
}

export default Navbar;
