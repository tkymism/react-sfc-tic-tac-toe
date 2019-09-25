import React from 'react';

const Status = props => {
    const { winner, xIsNext } = props;
    const nextPlayer = xIsNext => 'Next player: ' + (xIsNext ? 'X' : 'O');
    const winnerPlayer = winner => 'Winner:' + winner;
    return (
        <div>{ winner ? winnerPlayer(winner) : nextPlayer(xIsNext)  }</div>
    );  
}

export default Status;
  
  