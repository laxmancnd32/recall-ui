import React, { Component } from 'react';
import LoaderComponent from '../loader';
import InterviewsTableComponent from './components/interviews-table-component';

class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tableData: [
        {
          interviewer_id: '3435',
          first_name: "Swarna",
          last_name: "mishra",
          email: "swarna.mishra",
          phone: '91237941',
          status: true,
          created_at: '5346342'
        },
        {
          interviewer_id: '191',
          first_name: "Rishabh",
          last_name: "mishra",
          email: "rishi ankit",
          phone: '91237941',
          status: true,
          created_at: '623472342'
        }
      ]
    }
  }

  render() {
    const { isLoading, tableData } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    } else {
      return (
        <div className="jobs-component">
          <InterviewsTableComponent tableData={tableData}/>
        </div>
      );
    }
    
  }
}

export default Interviews;
