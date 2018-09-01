import React, { Component} from 'react';
import GenreAdapter from '../api/GenreAdapter';
import { connect } from 'react-redux';
import { getGenres } from '../Actions/index'


class Quiz extends Component {

    // BELOW TO BE ABSTRACTED INTO ADAPTER

    componentDidMount(){
        this.getGenreStrings()
    }

    getGenreStrings = () => {
        GenreAdapter.index().then(res => this.props.getGenreArr(res))
    }

    genreMap = () => {
        return this.props.genres.map(genreObj => {
            return (
                <li key={genreObj.id}>
                    <input type="checkbox" id={genreObj.name} value={genreObj.api_id}/>
                    <label htmlFor={genreObj.name}>{genreObj.name}</label>
                </li>
            )
        } )
    }
    

    
    render() {
        return (
            <div className='card'>
                <h1>What do you feel like getting</h1>
                <form>
                    <ul>
                        {this.genreMap()}
                    </ul>
                    <input type="submit" value="PODCAST ME UP BABY"/>
                </form> 

            </div>
        );
    }
}

const mapStateToProps = ({quizReducer:{genres, selectedGenres}}) => ({
    genres,
    selectedGenres
})

const mapDispatchToProps = (dispatch) => {
    return {
        getGenreArr: (genreArr) => dispatch( getGenres(genreArr) ) 
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Quiz);
