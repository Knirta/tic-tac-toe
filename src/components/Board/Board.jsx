import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import './Board.scss';

const Board = ({ cells, winnerLine, currentIndex, onClick }) => {
  const renderCell = i => {
    let highlightCell = false;
    let visibleCell = false;
    visibleCell = currentIndex === i;
    if (winnerLine) {
      highlightCell = winnerLine.includes(i);
    }
    let testId;
    if (onClick) {
      testId = `cell-${i}`;
    }
    return (
      <Cell
        value={cells[i]}
        key={i}
        highlightCell={highlightCell}
        visibleCell={visibleCell}
        testId={testId}
        onClick={() => onClick(i)}
      />
    );
  };

  return <div className="board">{cells.map((_, idx) => renderCell(idx))}</div>;
};

Board.propTypes = {
  cells: PropTypes.array.isRequired,
  winnerLine: PropTypes.arrayOf(PropTypes.number),
  currentIndex: PropTypes.number,
  onClick: PropTypes.func,
};

export default Board;
