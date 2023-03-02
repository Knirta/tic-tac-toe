import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Board from '../Board';
import { calculateWinner, calculateCurrentPosition } from '../../helpers/helpers'
import './Game.scss';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                cells: Array(9).fill(null),
                position: null,
            }],
            isXNext: true,
            stepNumber: 0,
            isAscending: true,
        }
        this.ascRef = React.createRef();
        this.descRef = React.createRef();
        this.arrowRef = this.state.isAscending ? this.descRef : this.ascRef;
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
            let position;
            if (step) {
                position = calculateCurrentPosition(move.position);
                desc = `Go to move ${step}`;
            } else {
                desc = 'Go to game start';
            }

            return (
                <li key={desc} className={`move ${step === this.state.stepNumber ? 'active' : ''}`}>
                    <button
                        className='btn'
                        data-testid={`btn-${step}`}
                        onClick={() => this.jumpTo(step)}
                    >
                        {desc}
                    </button> 
                    {(step !== 0) && <>
                        <Board 
                            cells={move.cells}
                            position={move.position}
                        />
                        <span className='position'>
                            <span>{position.row}</span>
                            <span>{position.col}</span>
                        </span>
                    </>}
                </li>
            )
        });

        const orderedMoves = this.state.isAscending ? moves : [...moves].reverse();

        return (
            <div className="game">
                <div className="game-board">
                    <div className="panel">
                        <p className="status">{status}</p>
                        <Board
                            line={line}
                            cells={current.cells}
                            position={current.position}
                            onClick={(i) => this.handleClick(i)}  
                        />
                    </div>
                </div>    
                <div className='game-info'>
                    <button 
                            className='order'
                            onClick={this.toggleOrder}
                        >
                        <SwitchTransition mode='out-in'>
                            <CSSTransition
                                key={this.state.isAscending}
                                nodeRef={this.arrowRef}
                                addEndListener={done => this.arrowRef.current.addEventListener('transitionend', done, false)}
                                classNames='arrow'
                            >
                                <span
                                    className='arrow'
                                    ref={this.arrowRef}
                                >
                                    {String.fromCharCode(this.state.isAscending ? 10225 : 10224)}
                                </span>
                            </CSSTransition>
                        </SwitchTransition>
                        <span>Show in {this.state.isAscending ? 'decsending' : 'ascending'} order</span>
                    </button>
                    <ul className='moves'>{orderedMoves}</ul>
                </div>
            </div>
        );
    }
}

export default Game;