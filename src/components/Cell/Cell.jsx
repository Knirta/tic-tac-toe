import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import './Cell.scss';

function Cell({ value, highlightCell, visibleCell, testId, onClick }) {
  const btnClass = cn({
    cell: true,
    highlight: highlightCell,
    visible: visibleCell,
  });
  return (
    <button className={btnClass} data-testid={testId} onClick={onClick}>
      <CSSTransition
        in={!!value}
        timeout={300}
        classNames={{
          enter: 'mark-enter',
          enterActive: 'mark-enter-active',
        }}
      >
        <span className="mark">{value}</span>
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
};

export default Cell;
