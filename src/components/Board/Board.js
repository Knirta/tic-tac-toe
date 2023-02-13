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
                highlight={highlight}
                key={i}
                value={this.props.cells[i]}
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