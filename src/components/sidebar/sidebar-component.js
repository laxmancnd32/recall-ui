import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './sidebar.scss'
class SideBarComponent extends Component {

    routeToPage = route => {
        const { history } = this.props;
        history.push(route);
    };

    render() {
      return (

        <div className="dashboard-sidebar">
          <div className="user-info">
          </div>
          <div className="dashboard-menu">
            <ul>
              <li className="active"><i className="fa fa-fw fa-home text-white"/><a href="/dashboard">Dashboard</a></li>
              <li><i className="fa fa-fw fa-thumbs-up text-white" aria-hidden="true"></i><a href="/jobs">Jobs</a></li>
              <li><i className="fa fa-fw fa-suitcase text-white" aria-hidden="true"></i><a href="/interview-pool">Interviwers</a></li>
            
            </ul>

         
          </div></div>
      );
    }
};

export default SideBarComponent;