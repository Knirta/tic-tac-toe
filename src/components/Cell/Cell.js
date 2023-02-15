import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Cell.scss';

function Cell({value, highlight, onClick}) {
    return (
        <button
            className={`cell ${highlight ? 'highlight' : '' }`}
            onClick={onClick}
        >
            <CSSTransition
                in={!!value}
                timeout={300}
                classNames='mark'
                // {{
                //     enter: 'mark-enter',
                //     enterActive: 'mark-enter-active'
                // }}
            >
                <span className='mark'>{value}</span>
            </CSSTransition>
        </button>   
    );
}

export default Cell;