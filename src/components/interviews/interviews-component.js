import React, { Component } from 'react';
import LoaderComponent from '../loader';
import InterviewsTableComponent from './components/interviews-table-component';
import { baseUrl } from '../../base-url';

class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tableData: [{}]
    }
  }

  componentDidMount() {
    const tableDataUrl = baseUrl+'/api/v1/interviewer';

    fetch(tableDataUrl,{
      method: 'GET'
    }).then(res => {
      return res.json();
    }
    ).then(response=>{
      this.setState({tableData: response,isLoading:false});
    });
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
