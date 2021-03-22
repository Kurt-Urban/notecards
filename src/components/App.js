import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './pages/Home'

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    {/* <Header /> */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </Router>
        </div >
    )
};

export default App;