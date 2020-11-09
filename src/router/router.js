import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/home.js'));
// const CommentList = lazy(() => import('./pages/commentList.js'));
import Home from '../pages/home';
import CommentList from '../pages/commentList';

const App = () => {
    return (
        <Router>
            <Route exact  path="/" component={Home}></Route>
            <Route path="/commentList" component={CommentList}></Route>
        </Router>
    )
}

export default App;