import React from 'react';
import commonStyles from '../styles/commonStyles';

const translateProps = (props) => {
    const _styles = props.disable ?
        { ...commonStyles.default, ...commonStyles.disable } :
        { ...commonStyles.default }

    return {...props, styles: _styles};
}

export default (WrappedComponent) => {
    return (args) => WrappedComponent(translateProps(args));
}