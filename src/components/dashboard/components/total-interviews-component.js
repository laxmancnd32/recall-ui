import React, { Component } from 'react';
import './all.css';
class TotalInterviews extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row dashboard-section user-statistic-block ">
            <div className="user-statistic col">
            <i class="fa fa-clock-o fa-4x floatleft" aria-hidden="true"></i>
              <h3>132</h3>
              <span>Companies Viewed</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-heart-o fa-4x floatleft" aria-hidden="true"></i>
              <h3>32</h3>
              <span>Favourite Jobs</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-briefcase fa-4x floatleft" aria-hidden="true"></i>
              <h3>12</h3>
              <span>Applied Jobs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalInterviews;
