import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './pages/Home';
import NoteList from './pages/NoteList';
import Header from '../components/Header';
import CreateNoteList from './pages/CreateNoteList';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/me" exact component={NoteList} />
                        <Route path="/new" exact component={CreateNoteList} />
                        <Route path="/login" exact component={SignIn} />
                        <Route path="/signup" exact component={SignUp} />
                    </Switch>
                </div>
            </Router>
        </div >
    )
};

export default App;