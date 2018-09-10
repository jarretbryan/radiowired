import React, { Component, Fragment } from 'react';
import {Search, Form, Button, Icon} from 'semantic-ui-react'


class SearchBox extends Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSearchSubmit = () =>{
        console.log(this.state.value)
    }


    render() {
        return (
            <Fragment>
            <Form id="registerForm" onSubmit={this.handleSearchSubmit}>
                <Form.Field>
                    <input type="text" id="search" name="search" value={this.state.value} placeholder="Search" onChange={this.handleChange} required />
                </Form.Field>
            </Form>
            </Fragment>
        );
    }
}

export default SearchBox;
