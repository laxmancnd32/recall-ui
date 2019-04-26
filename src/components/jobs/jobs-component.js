import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import JobsTableComponent from './components/jobs-table-component';
import ModalComponent from './components/modal-component';
import { fetchJSON } from '../../service/services'
import LoaderComponent from '../loader';
import "./jobs.scss";

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      jobTitle: '',
      jobDescription: '',
      isLoading: false,
      tableData: [
        {
        "job_pub_id": "JOB0000001",
        "title": "Python Developer",
        "description": "Dev",
        "status": true,
        "total_candidates": 0
        },
        {
          "job_pub_id": "yuwefwe",
          "title": "React Developer",
          "description": "Dev",
          "status": true,
          "total_candidates": 0
          },
          {
            "job_pub_id": "yuwefwe",
            "title": "selinium Tester",
            "description": "tester",
            "status": true,
            "total_candidates": 0
            }
        ]
    };
  }

  componentDidMount() {
    const tableDataUrl = '';
    fetchJSON(tableDataUrl, 'GET');
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleInputChange = (event,type) => {
    if(type==='text') {
      const jobTitle = event.target.value;
      this.setState({ jobTitle });
    }
    if(type==='textArea') {
      const jobDescription = event.target.value;
      this.setState({ jobDescription });
    }
    
  };
  handleSaveClick = () => {
    const { jobTitle, jobDescription } = this.state;
    const payload = {
      jobTitle,
      jobDescription
    }

  };

  render() {
    const { showModal, isLoading, tableData } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    }else {
      return (
        <div className="jobs-component">
          <Button variant="primary modal-popup-button" onClick={this.handleOpenModal}>
            Post a job
          </Button>
          <ModalComponent showModal={showModal} handleCloseModal={this.handleCloseModal} handleInputChange={this.handleInputChange} handleSaveClick={this.handleSaveClick} />
          <JobsTableComponent tableData={tableData}/>
        </div>
    );
    }
  }
}

export default Jobs;
