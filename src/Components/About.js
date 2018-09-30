import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Header, Label, Divider } from 'semantic-ui-react'
import MadeWithLove from './MadeWithLove';




const About = () => (
    <div>
        <Container>
            <Header as="h1"> RadioWired </Header>

            <p>RadioWired is a podcast discovery application and sampler. Not sure what to listen to next? Looking for something new? RadioWired will recommend new podcasts based on your content preferences. You can make playlists, favorite new gems, and sample to the latest (and <strong> only </strong> the latest) episodes! Stay up to date with what's coming in on the wire and find new content.</p>

            <Label size="big" color="blue">
                <NavLink to='register'>Sign Up Here</NavLink>
            </Label>
            <Divider />
            <MadeWithLove />
        </Container>
    </div>
)

export default About
