import React from 'react';
import Square from './square.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Square></Square>
            </div>
        )
    }
}

export default Board;