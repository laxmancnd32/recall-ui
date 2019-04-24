import React, { Component } from 'react';
import NavBarComponent from '../navbar';

class AppContainer extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className='app-container'>
        <NavBarComponent />
        {children}
      </div>
    );
  }
}

export default AppContainer;
