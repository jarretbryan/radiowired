import React, { Component } from 'react';

class UserLogin extends Component {
    
    
    
    render() {
        return (
            <form id="loginForm">
                <label for="email-input">Enter Your Email Address!</label> <br/>
                <input type="text" id="email-input" name="email" placeholder="example@example.com" required /> <br />
                <label for="password-input">Create a Secure Password</label><br />
                <input type="password" id="password-input" name="password" placeholder="enter a secure password" required /><br />
                <label for="display-name-input">What should we call you?</label><br />
                <input type="text" id="display-name-input" name="username" placeholder="America's Radio Sweetheart" required /><br />
                <label for="profile-image-input">Link a Profile Photo if you like! Or not, podcasting is an aural medium</label><br />
                <input type="text" id="profile-image-input" name="profile_image" placeholder="this is optional!" /><br />
                <input type="submit" />  <br />              
            </form>
        );
    }
}

export default UserLogin;
