import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Cell.scss';

function Cell({value, highlightCell, visibleCell, testId, onClick}) {
    return (
        <button
            className={`cell ${highlightCell ? 'highlight' : ''} ${visibleCell ? 'visible' : ''}`}
            data-testid={testId}
            onClick={onClick}
        >
            <CSSTransition
                in={!!value}
                timeout={300}
                classNames=  {{
                    enter: 'mark-enter',
                    enterActive: 'mark-enter-active'
                }}
            >
                <span className='mark'>{value}</span>
            </CSSTransition>
        </button>   
    );
}

export default Cell;