import React from 'react';
import './Cell.css';

function Cell(props) {
    return (
        <button
            className={`cell ${props.highlight ? 'highlight' : '' }`}
            onClick={props.onClick}
        >
            {props.value}
        </button>   
    );
}

export default Cell;