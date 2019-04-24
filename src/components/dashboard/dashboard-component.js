import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TotalInterviews from './components/total-interviews-component';
import TotalJobs from './components/total-jobs-component';
import TotalScreenedCandidates from './components/total-screened-candidates-component';
import "./dashboard.css";


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
      <div className='dashboard-component'>
        <Row className='common-total-info-row'>
          <Col className='common-total-info-col'>
            <TotalJobs />
          </Col>
          <Col className='common-total-info-col'>
            <TotalScreenedCandidates />
          </Col>
          <Col className='common-total-info-col'>
            <TotalInterviews />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
