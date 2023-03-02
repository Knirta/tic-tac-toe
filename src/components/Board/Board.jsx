import React from 'react';
import Cell from '../Cell';
import './Board.scss';

class Board extends React.Component {
    renderCell(i) {
        const line = this.props.line;
        let highlight = false;
        let current = false;
        current = this.props.position === i;
        if (line) {
            highlight = line.includes(i);
        }
        let testId;
        if (this.props.onClick) {
            testId = `cell-${i}`;
        }
        return (
            <Cell
                value={this.props.cells[i]}
                key={i}
                highlight={highlight}
                current={current}
                testId={testId}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const cells = this.props.cells;
        return (
            <div className="board">
                { cells.map( (_, idx ) => this.renderCell(idx) )}
            </div>
        );
    }
}

export default Board;