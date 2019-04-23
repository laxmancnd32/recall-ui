import React from 'react';
import {
    Route,
    Router,
    Switch
  } from "react-router-dom";
  import createBrowserHistory from 'history/createBrowserHistory';
  import HomePage from '../components/home-page';
  import PageNotFound from '../components/page-not-found/page-not-found-component';

  const ApplicationRouter = () => {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  };

  export default ApplicationRouter;