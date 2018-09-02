import React from 'react'

const Stream = (props) => (
    <div>
        <h4>{props.stream.title}</h4>
        <img src={props.stream.thumbnail} alt={props.stream.title} />
        <p>{props.stream.description}</p>
    </div>
)

export default Stream