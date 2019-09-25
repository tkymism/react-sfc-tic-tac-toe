import React from 'react';

const Square = props => 
    <button className="square" onClick={props.onClick}>{props.value}</button>;
const Board = props => {
    const square = i => 
        <Square value={props.squares[i]} onClick= { () => props.onClick(i) } />;
    return (
        <div>
            <div className="board-row">
                {square(0)}
                {square(1)}
                {square(2)}
            </div>
            <div className="board-row">
                {square(3)}
                {square(4)}
                {square(5)}
            </div>
            <div className="board-row">
                {square(6)}
                {square(7)}
                {square(8)}
            </div>
        </div>
    );
}

export default Board;
