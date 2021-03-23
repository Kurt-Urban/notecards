import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './pages/Home';
import NoteList from './pages/NoteList';
import Header from '../components/Header';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/me" exact component={NoteList} />
                    </Switch>
                </div>
            </Router>
        </div >
    )
};

export default App;