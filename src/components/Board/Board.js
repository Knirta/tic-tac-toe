import React from 'react';
import Cell from '../Cell';
import './Board.css';

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

    renderBoard(size) {
        const board = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(this.renderCell(i * size + j));
            }
            board.push(
                <div key={i} className="board-row">
                    {row}
                </div>
            );
        }
        return board;
    }

    render() {
        return (
            <div className="game-board">
            {this.renderBoard(3)}
            </div>
        );
    }
}

export default Board;