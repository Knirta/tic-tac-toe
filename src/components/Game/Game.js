import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Board from '../Board';
import Header from '../Header';
import { calculateWinner, calculateCurrentPosition } from '../../helpers/helpers'
import './Game.scss';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                cells: Array(9).fill(null),
                position: 0,
            }],
            isXNext: true,
            stepNumber: 0,
            isAscending: true,
        }
        this.toggleOrder = this.toggleOrder.bind(this);
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const cells = current.cells.slice();
        if (calculateWinner(cells) || cells[i]) {
            return;
        }
        cells[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                cells: cells,
                position: i,
            }]),
            isXNext: !this.state.isXNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2 === 0),
        });
    }

    toggleOrder() {
        this.setState({
            isAscending: !this.state.isAscending,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        let status;
        let line = null;
        const winner = calculateWinner(current.cells);
        if (winner) {
            status = `Winner: ${winner.cell}`;
            line = winner.line;
        } else if (!winner && !current.cells.includes(null)) {
            status = 'Played a draw';
        } else {
            status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;
        }
        const moves = history.map((move, step) => {
            let desc;
            let show = false
            if (step) {
                const position = calculateCurrentPosition(move.position);
                desc = `Go to move #${step} ${position}`;
            } else {
                desc = 'Go to game start';
                setTimeout(() => {show = true}, 1000)
            }

            return (
                <li key={step} className={`item ${step === this.state.stepNumber ? 'active' : ''}`}>
                    <CSSTransition
                        in={true}
                        timeout={300}
                        classNames='btn'
                    >
                        <button
                            className='btn'
                            onClick={() => this.jumpTo(step)}
                        >
                            {desc}
                        </button>
                    </CSSTransition>
                </li>
            )
        });

        const order = String.fromCharCode(this.state.isAscending ? 10225 : 10224);

        return (
        <>
            <Header/>
            <div className="game">
                <div className="game-board">
                    <div className="panel">
                        <p className="status">{status}</p>
                        <Board 
                            line={line}
                            cells={current.cells}
                            onClick={(i) => this.handleClick(i)}  
                        />
                    </div>
                </div>    
                <div className="game-info">
                    <button className="order" onClick={this.toggleOrder}>{order}</button>
                    <ol>{this.state.isAscending ? moves : moves.reverse()}</ol>
                </div>
            </div>
        </>
        );
    }
}

export default Game;