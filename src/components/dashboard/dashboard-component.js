import React, { Component } from 'react';
import DashBoardInfo from './components/dashboard-info-component';
import { baseUrl } from '../../base-url';
import LoaderComponent from '../loader';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboardData: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const dashboardUrl = baseUrl+'/api/v1/dashboard';
    fetch(dashboardUrl,{
      method: 'GET'
    }).then(res => {
      return res.json();
    }
    ).then(response=>{
      this.setState({dashboardData: response,isLoading:false});
    });
  }
  render() {
    const { isLoading, dashboardData } = this.state;
    
    if(isLoading) {
      return (<LoaderComponent />);
    } else{
      return (
        <DashBoardInfo dashboardData={dashboardData}/>
      );
    }
  }
}

export default Dashboard;
