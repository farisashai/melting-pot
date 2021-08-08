import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME_PATH, LOGIN_PATH, ROOT_PATH } from 'constants/route-constants';
import LoginPage from 'components/pages/LoginPage';
import HomePage from 'components/pages/HomePage';
import { Redirect } from 'react-router';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path={HOME_PATH} component={HomePage} />
      <Route exact path={LOGIN_PATH} component={LoginPage} />
      <Route exact path={ROOT_PATH}>
        <Redirect to={LOGIN_PATH} />
      </Route>
    </Switch>
  </Router>
);

export default AppRoutes;
