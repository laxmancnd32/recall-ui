import React from 'react';
import './all.css';
const DashBoardInfo = props => {
    const { dashboardData } = props;
    const totalJobs = dashboardData.find(data => data.type === 'job');
    const totalCandidates = dashboardData.find(data => data.type === 'candidate');
    const totalSelected = dashboardData.find(data => data.type === 'selected');

    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row dashboard-section user-statistic-block ">
            <div className="user-statistic col">
            <i class="fa fa-clock-o fa-3x floatleft" aria-hidden="true"></i>
              <h3>{totalJobs.qty}</h3>
              <span>Total Jobs</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-heart-o fa-3x floatleft" aria-hidden="true"></i>
              <h3>{totalCandidates.qty}</h3>
              <span>Total Candidates</span>
            </div>
            <div className="user-statistic col">
            <i class="fa fa-briefcase fa-3x
             floatleft" aria-hidden="true"></i>
              <h3>{totalSelected.qty}</h3>
              <span>Selected Candidates</span>
            </div>
          </div>
        </div>        
      </div>      
    );
}

export default DashBoardInfo;
