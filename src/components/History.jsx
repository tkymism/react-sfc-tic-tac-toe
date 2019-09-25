import React from 'react';

const History = props => {
    const { history, onClick } = props;
    const render = move => {
        return (
            <li key={ move }>
                <button onClick={ () => onClick( move ) }>
                    { move ? 'Go to move #' + move : 'Go to game start' }
                </button>
            </li>
        );
    }
    return <ol> { history.map((step, move) => render(move)) } </ol>
}

export default History;