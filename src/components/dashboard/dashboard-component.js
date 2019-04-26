import React, { Component } from 'react';
import TotalInterviews from './components/total-interviews-component';
import "./dashboard.scss";


const initialState = {
  sampleState: 'testValue'
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getDashboardInfo();
    this.setState({ testState: 'afas'});
  }
  render() {
    // eslint-disable-next-line
    const props = this.props;
    return (
        <TotalInterviews />
    );
  }
}

export default Dashboard;
