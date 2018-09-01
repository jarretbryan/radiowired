import React, { Component } from 'react';
import GenreAdapter from '../api/GenreAdapter';

class Quiz extends Component {

    // BELOW TO BE ABSTRACTED INTO ADAPTER

    getGenreStrings = () => {
        // GenreAdapter.index().then(res => res.map(
        //     genreObj => <p>{genreObj.name}</p>
        // )
        // )
        GenreAdapter.index().then(console.log)
    }
    

    
    render() {
        return (
            <div>
                <h1>What do you feel like getting</h1>
                {this.getGenreStrings()}

            </div>
        );
    }
}

export default Quiz;
