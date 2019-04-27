import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

const InterviewsTableComponent = props => {
    const { tableData } = props;
  
    return (
     <div className="table-component">
        <Table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Interviewer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const { interviewer_id, first_name, last_name, email, phone, status, created_at } = data;
                const statusData = status? 'open': 'closed';
                return (
                  <Fragment>
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{interviewer_id}</td>
                      <td>{first_name}</td>
                      <td>{last_name}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <td>{statusData}</td>
                      <td>{created_at}</td>
                    </tr>
                  </Fragment>
                );

              })}
            </tbody>
        </Table>
       </div>
    );
}

export default InterviewsTableComponent;
