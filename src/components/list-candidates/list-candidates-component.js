import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { baseUrl } from '../../base-url';
import LoaderComponent from '../loader';
import "./listCandidate.scss";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isChecked: false,
      candidatesData: [{}]
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { job_id } = match.params;
    const listCandidatesUrl = baseUrl+'/api/v1/job-candidate/'+job_id;

    fetch(listCandidatesUrl,{
      method: 'GET'
    }).then(res=> res.json()
    ).then(response =>{
      this.setState({ candidatesData: response, isLoading: false});
    })
  }

  handleCheckboxChange = (chechedCv, isChecked) => {
    const { candidatesData } = this.state;
    let clonedCandidatesData = Object.assign([], candidatesData);
    let currentCandidate = candidatesData.find(data => data.cv_filename === chechedCv);
    currentCandidate = {...currentCandidate, isChecked: !isChecked};
    candidatesData.forEach((data,index) => {
      if(data.cv_filename===chechedCv) {
        clonedCandidatesData[index] = currentCandidate;
      }
    })
    this.setState({ candidatesData: clonedCandidatesData });
  }

  formatPayload = selectedCandidate => {
   return selectedCandidate.map(candidate => {
      const { email, recent_company, gender, phone_number, programming_languages, name, rank, cv_filename} = candidate;
      return {
        email, 
        recent_company, 
        gender, 
        phone_number, 
        programming_languages, 
        name, 
        rank, 
        cv_filename
      }
    });
  };

  handleSendEmail =()=> {
    const { match, history } = this.props;
    const { job_id } = match.params;
    const { candidatesData } = this.state;
    const selectedCandidate = candidatesData.filter(candidate => candidate.isChecked === true);
    const formattedSelectedCandidate = this.formatPayload(selectedCandidate);
    const sendEmailUrl = baseUrl+'/api/v1/job-candidate';
    fetch(sendEmailUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        job_id,
        candidates: JSON.stringify(formattedSelectedCandidate)
      })
    }).then(res=> {
      return res.json();
    }).then(response => { 
        const { message = '' } = response;
        if(message === 'Added'){
          history.push({ pathname: '/interview-status'});
        }
    });
  };
  render() {
    const { isLoading, candidatesData } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    }else {
    return (
        <div className="list-candidate">
          <div className="row">
            <div className="send-email-row col">
              <Button className="float-right sendemail" onClick={this.handleSendEmail}>Send Email</Button>
            </div>
          </div>
          {
            candidatesData.map((data, index) => { 
              const { recent_company, programming_languages = [], email = '', name = '', cv_filename = '', phone_number = [], rank, isChecked = false } = data;
              const skills = programming_languages.join();
              const phone = phone_number.join();
              const trimmedName = name.trim();
              const resumeDownload = baseUrl+'/t30hack/resume-pool/'+cv_filename;
              return(
                <Fragment>
                  <div className="shadow p-3 mt-2 mb-2 bg-white rounded row candidate-row align-items-center">
                    <div className="col-1">
                      <i class="fa fa-user-circle-o fa-fw fa-3x"></i>
                    </div>
                    <div className="col-3">
                      <h4>{trimmedName === ''? 'Not Availablle': name}</h4>
                    </div>
                    <div className="col-4">
                      <div className="info">
                        <div className="location"><i className="fa fa-envelope fa-fw"></i>{email}</div>
                        <div className="work-post"><i className="fa fa-book fa-fw"></i> {skills}</div>
                        <div className="phone-number"><i className="fa fa-mobile fa-fw" aria-hidden="true"></i>{phone}</div>
                      </div>
                    </div>
                    <div className="checkbox-div col-1">
                      <input type="checkbox" checked={isChecked} onChange={() => this.handleCheckboxChange(cv_filename, isChecked)} />
                    </div>
                    <div className="col-3 text-right">
                      <Button>
                        <a href={resumeDownload}>View Resume</a>
                      </Button>
                    </div>
                  </div>
                </Fragment>
              );               
          })}
        </div>
      );
    }
  }
}

export default List;
