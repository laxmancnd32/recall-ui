import React, { Component } from 'react';
import './all.css';
class TotalInterviews extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row dashboard-section user-statistic-block ">
            <div className="user-statistic col">
            <i class="fa fa-clock-o fa-3x floatleft" aria-hidden="true"></i>
              <h3>132</h3>
              <span>Total Jobs</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-heart-o fa-3x floatleft" aria-hidden="true"></i>
              <h3>32</h3>
              <span>Total Candidates</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-briefcase fa-3x
             floatleft" aria-hidden="true"></i>
              <h3>12</h3>
              <span>Selected Candidates</span>
            </div>
          </div>
        </div>        
      </div>      
    );
  }
}

export default TotalInterviews;
