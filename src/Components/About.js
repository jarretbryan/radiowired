import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Header, Label } from 'semantic-ui-react'




const About = () => (
    <div>
        <Container fluid>
            <Header as="h1"> RadioWired </Header>

        <p>This is a podcast curation app. Choose some genres, get some podcasts.</p>
       
         <Label size="big" color="blue">
            <NavLink to='register'>Sign Up Here</NavLink>
         </Label>
        

        

        </Container>
    </div>
)

export default About
