import React, { Component } from 'react';


class Loadercomponent extends Component {

  render() {
    return (
        <div className="loader">
            <i class="fa fa-spinner fa-spin fa-5x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </div>
    );
  }
}

export default Loadercomponent;
