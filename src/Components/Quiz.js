import React, { Component} from 'react';
import GenreAdapter from '../api/GenreAdapter';
import { connect } from 'react-redux';
import { getGenres } from '../Actions/index'


class Quiz extends Component {

    state = {
        selectedGenres:[],
        defaultSelected: false
    }

    componentDidMount(){
        this.getGenreStrings()
    }

    getGenreStrings = () => {
        GenreAdapter.index().then(res => this.props.getGenreArr(res))
    }

    handleSelect = (event) => {
        console.log(event.target.value)
        console.log(event.target.checked)

        if (event.target.checked === true){
            // event.target.checked = true
            let newArr = [...this.state.selectedGenres]
            newArr.push(event.target.value)
            this.setState({
                selectedGenres: newArr
            })
        } else if (event.target.checked === false){
            // event.target.checked = false
            let newArr = this.state.selectedGenres.filter(element => element !== event.target.value)
            this.setState({
                selectedGenres: newArr
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.selectedGenres)
        // i need to post the array as a key in the body of my post request
        // on the frontend the post can be done with genreAdapter
        
        // on the backend the route needs to be to a listen notes controller - at which point a method will be triggered to call best podcasts of that genre, and return a sample, save the stream data, and return that - this route will take in the array of numbers of genres, and this.props.user.id to know which user_id to make the playlist for

    }

    genreMap = () => {
        return this.props.genres.map(genreObj => {
            return (
                <li key={genreObj.id}>
                    <input onChange={this.handleSelect} checked={this.props.defaultSelected} type="checkbox" id={genreObj.name} value={genreObj.api_id}/>
                    <label htmlFor={genreObj.name}>{genreObj.name}</label>
                </li>
            )
        } )
    }
    

    
    render() {
        return (
            <div className='card'>
                <h1>What do you feel like getting</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.genreMap()}
                    </ul>
                    <input type="submit" value="PODCAST ME UP BABY"/>
                </form> 

            </div>
        );
    }
}

const mapStateToProps = ({quizReducer:{genres}, usersReducer:{user}}) => ({
    genres,
    user
})

const mapDispatchToProps = (dispatch) => {
    return {
        getGenreArr: (genreArr) => dispatch( getGenres(genreArr) ) 
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Quiz);
