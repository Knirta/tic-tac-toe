import React from 'react';
import './Cell.scss';

function Cell(props) {
    return (
        <button
            className={`cell ${props.highlight ? 'highlight' : '' }`}
            onClick={props.onClick}
        >
            <span className='mark'>{props.value}</span>
        </button>   
    );
}

export default Cell;