import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import LoginPage from 'components/pages/LoginPage';
import { ROOT_PATH, HOME } from 'constants/route-constants';
import HomePage from 'components/pages/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROOT_PATH} component={LoginPage} />
      <Route exact path={HOME} component={HomePage} />
      <Route>
        <Redirect to={ROOT_PATH} />
      </Route>
    </Switch>
  </Router>
);

export default App;
