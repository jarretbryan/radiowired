import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Header, Label, Divider } from 'semantic-ui-react'
import apiLogo from '../gifs/api-transparent background for white background.png';




const About = () => (
    <div>
        <Container>
            <Header as="h1"> RadioWired </Header>

        <p>RadioWired is a podcast discovery application. Not sure waht to listen to next? Looking for something new? RadioWired will recommend new podcasts based on your content preferences. You can make playlists, favorite new gems, and listen to the latest (and <strong> only </strong> the latest) episodes! Stay up to date with what's coming in on the wire and find new content.</p>

         <Label size="big" color="blue">
            <NavLink to='register'>Sign Up Here</NavLink>
         </Label>
         <Divider />
        <Label as='a' image>
            <img src={apiLogo} alt="ListenNotes" />
            <Label.Detail>Made with ♥️ at the Flatiron School by <a href='https://www.github.com/jarretbryan'>jarretbryan</a>   </Label.Detail>
         </Label>
       

        

        

        </Container>
    </div>
)

export default About
