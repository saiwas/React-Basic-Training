import React from 'react';
import styleWrapper from '../HOC/styleWrapper';

const ButtonOne = (props) => {
    return (
        <button style={props.styles}>Button One</button>
    )
}

export default styleWrapper(ButtonOne);
