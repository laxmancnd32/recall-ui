import React from 'react';
import {
    Route,
    Router,
    Switch
  } from "react-router-dom";
  import createBrowserHistory from 'history/createBrowserHistory';
  import Dashboard from '../components/dashboard';
  import Jobs from '../components/jobs';
  import Interviews from '../components/interviews';
  import PageNotFound from '../components/page-not-found/page-not-found-component';
  import ListCandidates from '../components/ListCandidates';
  import AppContainer from '../components/app-container';
  const ApplicationRouter = () => {
      return (
        <Router history={createBrowserHistory()}>
          <AppContainer history = {createBrowserHistory()}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/interview-pool" component={Interviews} />
              <Route exact path="/list-candidates" component={ListCandidates} />
              <Route component={PageNotFound} />
            </Switch>
          </AppContainer>
        </Router>
      );
  };

  export default ApplicationRouter;