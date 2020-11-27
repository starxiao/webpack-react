import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// const Home = lazy(() => import('./pages/home.js'));
// const CommentList = lazy(() => import('./pages/commentList.js'));
import Home from '../pages/home';
import CommentList from '../pages/commentList';
import Hook from '../pages/hook';
import Myclass from '../pages/myClass';
import Game from '../pages/game';
const App = () => {
    return (
        <Router>
            <Route exact  path="/" component={Home}></Route>
            <Route path="/commentList" component={CommentList}></Route>
            <Route path="/hook" component={Hook}></Route>
            <Route path="/Myclass" component={Myclass}></Route>
            <Route path="/game" component={Game}></Route>
        </Router>
    )
}

export default App;