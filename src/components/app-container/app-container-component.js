import React, { Component } from 'react';
import SideBarComponent from '../sidebar'
import PageContainerComponent from '../page-container';

class AppContainer extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className='app-container'>
        <SideBarComponent history={this.props.history}/>     
        <PageContainerComponent>
        {children}
        </PageContainerComponent>   
      </div>
    );
  }
}

export default AppContainer;
