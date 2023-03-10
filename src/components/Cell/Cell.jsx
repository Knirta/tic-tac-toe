import React from 'react';
import PropTypes from 'prop-types';
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

Cell.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]),
    highlightCell: PropTypes.bool,
    visibleCell: PropTypes.bool,
    testId: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Cell;