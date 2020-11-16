import React from 'react';

class Myclass extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log(this.state);
    }
    handleClick() {
        this.setState({
            count: this.state.count+1
        });
    }

    render() {
        return (
            <div>
                <p>you click count times {this.state.count}</p>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}

export default Myclass;