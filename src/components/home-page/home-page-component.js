import React, { Component } from 'react';
import HeaderComponent from '../header/header-component';

const initialState = {
  sampleState: 'testValue'
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getHomePageInfo();
    this.setState({ testState: 'afas'});
  }
  render() {
    // eslint-disable-next-line
    const props = this.props;
    return (
      <div>
        <HeaderComponent />
        Sample-React-APP
       </div>
    );
  }
}

export default HomePage;
