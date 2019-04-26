import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AppContainer from '../app-container-component';

export default withRouter(
    connect()(AppContainer)
);
