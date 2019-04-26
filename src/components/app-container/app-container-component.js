import React, { Component } from 'react';
import SideBarComponent from '../sidebar'
import PageContainerComponent from '../page-container';
import HeaderComponent from '../Header';
class AppContainer extends Component {

  render() {
    const { children, history } = this.props;
    return (
      <div className='app-container'>
      <HeaderComponent/>
        <SideBarComponent history={history}/>     
        <PageContainerComponent history={history}>
          {children}
        </PageContainerComponent>   
      </div>
    );
  }
}

export default AppContainer;
