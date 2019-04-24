import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { select } from './dashboard-selector';
import * as dashboardActions from './dashboard-actions';
import { withRouter } from 'react-router';
import Dashboard from '../dashboard-component';

const mapDispatchToProps = dispatch => {
    const actions = bindActionCreators(dashboardActions, dispatch);

    return { actions };
}

export default withRouter(
    connect(
        select,
        mapDispatchToProps
    )(Dashboard)
);
