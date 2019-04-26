import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';

class TableComponent extends Component {

  render() {
      const tableData = [
        {
        "job_pub_id": "JOB0000001",
        "title": "Python Developer",
        "description": "Dev",
        "status": true,
        "total_candidates": 0
        }
        ];
    return (
     <div className="table-component">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Job</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Total Candidates</th>
                </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const { job_pub_id, title, description, status, total_candidates } = data;
                return (
                  <Fragment>
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{job_pub_id}</td>
                      <td>{title}</td>
                      <td>{description}</td>
                      <td>{status}</td>
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
}

export default TableComponent;
