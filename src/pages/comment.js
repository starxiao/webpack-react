import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>{this.props.comment.title}</div>
        )
    }
}

export default Comment;