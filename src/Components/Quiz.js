import React, { Component, Fragment} from 'react';
import GenreAdapter from '../api/GenreAdapter';
import { connect } from 'react-redux';
import { getGenres } from '../Actions/index'
import { NavLink, Redirect } from 'react-router-dom'
import { Card, Divider, Grid, Container, Form, Button, Segment, Label } from 'semantic-ui-react'
import AuthWrapper from '../HOComponents/AuthWrapper';
import apiLogo from '../gifs/api-transparent background for white background.png';



class Quiz extends Component {

    state = {
        selectedGenres:[],
        defaultSelected: false,
        redirect: false,
        listLength: ""
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

    handleDrop = (event) => {
        this.setState({
            listLength: event.target.value
        })
    }

    prepRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect === true) {
            return <Redirect to="profile" />
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.selectedGenres)

        let submitObj = {
            selectedGenres: this.state.selectedGenres,
            user_id: this.props.user.id,
            list_length: parseInt(this.state.listLength, 10)
        }
        GenreAdapter.postGenre(submitObj)
        .then( () => {
            // debugger;
            this.setState({
            redirect:true
        })}  ) 
    }

    genreMap = () => {
        return this.props.genres.map(genreObj => {
            return (
               
                <Card key={genreObj.id} color='olive' >
                    <Card.Content>
                        <Grid columns={2} relaxed>
                            <Grid.Column>

                        <label htmlFor={genreObj.name}>{genreObj.name}</label>
                            </Grid.Column> 
                    <Divider vertical/>
                    <Grid.Column>
                        <input onChange={this.handleSelect} checked={this.props.defaultSelected} type="checkbox" id={genreObj.name} value={genreObj.api_id}/>
                    
                            </Grid.Column>                   
                        </Grid>
                    </Card.Content>
           
                </Card>
            )
        } )
    }

    render() {
        return (
            <Fragment>

                <NavLink to='/profile'>Back to your profile!</NavLink>
                {this.renderRedirect()}
                <Container>
                    <h1>What do you feel like listening to?</h1>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label htmlFor="numOfCasts">How many podcasts would you like in your playlist? (1-5)</label><br/>
                    <select id="numOfCasts" value={this.state.listLength} onChange={this.handleDrop} required>
                        <option value="" selected disabled hidden >Choose here</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </Form.Field>
                    <Divider />
                    
                        <Card.Group centered>
                            {this.genreMap()}
                        </Card.Group>
                    
                    <Divider />
                    <Button inverted color="green" position="right" type='submit'>Give me my Recommendations!</Button>
                    </Form>
                </Container>
                <Segment>
                    <Label as='a' image>
                        <img src={apiLogo} alt="ListenNotes" />
                        <Label.Detail>Made with ♥️ at the Flatiron School</Label.Detail>
                    </Label>
                </Segment>
            </Fragment>
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

export default AuthWrapper(connect(mapStateToProps, mapDispatchToProps) (Quiz));
