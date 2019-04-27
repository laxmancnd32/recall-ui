import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import JobsTableComponent from './components/jobs-table-component';
import ModalComponent from './components/modal-component';
import LoaderComponent from '../loader';
import { baseUrl } from '../../base-url';
import "./jobs.scss";

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      jobTitle: '',
      jobDescription: '',
      isLoading: true,
      tableData: [{}]
    };
  }

  componentDidMount() {
    const tableDataUrl = baseUrl+'/api/v1/jobs';

    fetch(tableDataUrl,{
      method: 'GET'
    }).then(res => {
      return res.json();
    }
    ).then(response=>{
      this.setState({tableData: response,isLoading:false});
    });
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
    const { history } = this.props;
    const { jobTitle = '', jobDescription = '' } = this.state;
    if(jobTitle !== '' && jobDescription.length >= 300) {
      const payload = {
        'title': jobTitle,
        'description': jobDescription
      }
      const saveJobUrl = baseUrl+"/api/v1/jobs";
      fetch(saveJobUrl, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(res=> {
        return res.json();
      }).then(response => {
        if(response) {
          const { job_id } = response;
          history.push({pathname:'/list-candidates/'+job_id});
        }
      })
    }
  };

  redirectToInterviews = job_id => {
    const { history } = this.props;
    history.push({ pathname: '/list-candidates/'+job_id});
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
          <JobsTableComponent tableData={tableData} redirectToInterviews={this.redirectToInterviews}/>
        </div>
    );
    }
  }
}

export default Jobs;
