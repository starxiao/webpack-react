import React from 'react';
import Board from '../components/board';
class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Board></Board>
            </div>
        )
    }
}

export default Game;