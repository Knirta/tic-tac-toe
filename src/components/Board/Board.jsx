import React from 'react';
import Cell from '../Cell';
import './Board.scss';

class Board extends React.Component {
    renderCell(i) {
        const line = this.props.line;
        let highlight = false;
        if (line) {
            highlight = line.includes(i);
        }
        return (
            <Cell
                value={this.props.cells[i]}
                key={i}
                highlight={highlight}
                testId={`cell-${i}`}
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