import React from 'react';
import '../index.css';

export default function Square(props) {
    console.log(this.props.piece);
    return (
        <button
            className={'square ' + props.shade}
            onClick={props.onClick}
            style={props.style}
        ></button>
    );
}