import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './counter';

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/counter" component={Counter} />
            </Switch>
        </Router>
    );
};

export default Routes;