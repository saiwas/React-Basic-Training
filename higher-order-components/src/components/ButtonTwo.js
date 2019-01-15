import React from 'react';
import styleWrapper from '../HOC/styleWrapper';

const ButtonTwo = (props) => {
    return (
        <button style={props.styles}>Button Two</button>
    )
}

export default styleWrapper(ButtonTwo);
