import React, { Component } from 'react';
import SideBarComponent from '../sidebar'

class AppContainer extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className='app-container'>
        <SideBarComponent history={this.props.history}/>        
        {children}
      </div>
    );
  }
}

export default AppContainer;
