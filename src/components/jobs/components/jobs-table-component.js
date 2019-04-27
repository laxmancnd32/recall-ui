import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

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
                </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const { job_pub_id, title, description, status, total_candidates } = data;
                const statusData = status? 'open': 'closed';
                return (
                  <Fragment>
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{job_pub_id}</td>
                      <td>{title}</td>
                      <td>{description}</td>
                      <td>{statusData}</td>
                      <td>{total_candidates}</td>
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
