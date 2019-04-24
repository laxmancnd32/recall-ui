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
  import CandidatePool from '../components/candidate-pool';
  import PageNotFound from '../components/page-not-found/page-not-found-component';
  import AppContainer from '../components/app-container';


  const ApplicationRouter = () => {
    return (
      <Router history={createBrowserHistory()}>
        <AppContainer>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/interviews" component={Interviews} />
            <Route exact path="/candidate-pool" component={CandidatePool} />
            <Route component={PageNotFound} />
          </Switch>
        </AppContainer>
      </Router>
    );
  };

  export default ApplicationRouter;