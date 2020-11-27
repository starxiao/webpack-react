import React from 'react';
import ReactCSSModules from 'react-css-modules';
import styles from './index.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" styleName="red">hello home</div>
        )
    }
}

export default ReactCSSModules(Home, styles);