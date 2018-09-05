import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react'




const About = () => (
    <div>
        <Container fluid>
            <Header as="h1"> RadioWired </Header>

        <p>This is a podcast curation app. Choose some genres, get some podcasts.</p>
       
         <Button>
            <NavLink to='register'>Sign Up Here</NavLink>
        </Button>

        

        </Container>
    </div>
)

export default About
