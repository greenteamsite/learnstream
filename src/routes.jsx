import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Pages
import HomePageContainer from './components/home/HomePageContainer';
import DashboardPageContainer from './components/dashboard/DashboardPageContainer';
import UnitPageContainer from './components/unit/UnitPageContainer';
import UserProfilePageContainer from './components/userProfile/UserProfilePageContainer';

// Helpers
import AuthLib from './helpers/auth';

function requireAuth(nextState, replace) {
  // TODO: Add checking auth (remove !nextState)
  if (!AuthLib.isLogged()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

function requireNoAuth(nextState, replace) {
  // TODO: Add checking auth (remove !nextState)
  if (AuthLib.isLogged()) {
    replace({
      pathname: '/dashboard',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomePageContainer} onEnter={requireNoAuth} />
      <Route path="dashboard" component={DashboardPageContainer} onEnter={requireAuth} />
      <Route path="unit/:id" component={UnitPageContainer} />
      <Route path="profile/:login" component={UserProfilePageContainer} />
    </Route>
  </Router>
);
