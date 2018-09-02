import React from 'react'
import { NavLink } from 'react-router-dom' 



const About = () => (
    <div>
        <p>This is a podcast curation app. Choose some genres, get some podcasts.</p>
        <button>
            <NavLink to='login'>Login Here</NavLink>
        </button>
        <p>or</p>
         <button>
            <NavLink to='register'>Sign Up Here</NavLink>
        </button>

        

    </div>
)

export default About
