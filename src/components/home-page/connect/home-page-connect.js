import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { select } from './home-page-selector';
import * as homePageActions from './home-page-actions';
import { withRouter } from 'react-router';
import HomePage from '../home-page-component';

const mapDispatchToProps = dispatch => {
    const actions = bindActionCreators(homePageActions, dispatch);

    return { actions };
}

export default withRouter(
    connect(
        select,
        mapDispatchToProps
    )(HomePage)
);
