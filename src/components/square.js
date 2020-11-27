import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 'O'
        }
    }

    render() {
        return (
        <div className="square">{this.state.flag}</div>
        )
    }
}

export default Square;