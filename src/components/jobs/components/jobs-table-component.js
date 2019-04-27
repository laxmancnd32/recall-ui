import React, { Fragment } from 'react';
import { Table, Button } from 'react-bootstrap';

const JobsTableComponent = props => {
    const { tableData } = props;
    return (
     <div className="table-component padding">
        <Table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Job Id</th>
                    <th>Job</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Total Candidates</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const { job_pub_id, title, description, status, total_candidates, job_id, screening } = data;
                const statusData = status? 'open': 'closed';
                const redirectPage = screening === 0 ? '/list-candidates/'+job_id : '/interview-status/'+job_id
                return (
                  <Fragment>
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{job_pub_id}</td>
                      <td>{title}</td>
                      <td>{description}</td>
                      <td>{statusData}</td>
                      <td>{total_candidates}</td>
                      <td><a href={redirectPage} className="btn btn-primary btn-sm">Show</a></td>
                    </tr>
                  </Fragment>
                );

              })}
            </tbody>
        </Table>
       </div>
    );
}

export default JobsTableComponent;
