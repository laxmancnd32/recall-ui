import React, { Component } from 'react';
import PageContainerComponent from '../page-container';

class PageNotFound extends Component {

  render() {
    return (
      <div className="page-not-found">
        <PageContainerComponent>
          Page Not Found
        </PageContainerComponent>
       </div>
    );
  }
}

export default PageNotFound;
