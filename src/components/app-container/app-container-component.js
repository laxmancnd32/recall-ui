import React, { Component } from 'react';
import SideBarComponent from '../sidebar/sidebar-component';
import PageContainerComponent from '../page-container';
import HeaderComponent from '../Header';
class AppContainer extends Component {

  render() {
    const { children, history } = this.props;
    return (
      <div className='app-container'>
      <div className="row">
      <div className="col-md-12">
            <HeaderComponent/>
          </div>
      </div>
        <div className="row">
        <div className="col-md-2">
            <SideBarComponent/>
          </div>
          <div className="col-md-10">
            <PageContainerComponent history={history}>
                {children}
            </PageContainerComponent>   
          </div>
        </div>    
      </div>

    );
  }
}

export default AppContainer;
