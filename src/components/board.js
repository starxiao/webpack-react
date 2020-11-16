import React from 'react';
import Square from '../components/square';

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