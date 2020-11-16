import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments: [{title: '你还得',id: 0},{title: '安静的那点事',id: 1}]
        };

        this.titleDom = React.createRef();
    }

    handleChange() {
        this.setState({
            comments: [{title: '卡开着车没怎么',id: 0},{title: 'sdfkjsjkf',id: 1}]
        });
        console.log(this.titleDom);
    }

    componentWillMount() {
        console.log(this.titleDom);
    }

    componentDidMount() {
        console.log(this.titleDom);
    }

    render() {
        return(
            <div>
                <h1 ref={this.titleDom} onClick={this.handleChange}>CommentList</h1>
                {this.state.comments.map((comment) => {
                    return(
                        <Comment comment={comment} key={comment.id}></Comment>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;