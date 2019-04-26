import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TableComponent from './components/table-component';
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
      isLoading: false
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
    const { showModal, isLoading } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    }else {
      return (
        <div className="jobs-component">
          <Button variant="primary modal-popup-button" onClick={this.handleOpenModal}>
            Post a job
          </Button>
          <ModalComponent showModal={showModal} handleCloseModal={this.handleCloseModal} handleInputChange={this.handleInputChange} handleSaveClick={this.handleSaveClick} />
          <TableComponent />
        </div>
    );
    }
  }
}

export default Jobs;
