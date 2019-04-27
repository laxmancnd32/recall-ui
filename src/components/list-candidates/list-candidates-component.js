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
      candidatesData: [
        {
        'recent_company': 'no experience',
        'email': 'rishiankit9@gmail.com',
        'phone_number': '8553320433',
        'skills': 'java, css, php',
        'name': 'Swarna Mishra',
        'cv': 'file.pdf'
        },
        {
        'recent_company': 'no experience',
        'email': 'swaruMishra@gmail.com',
        'phone_number': '9148405826',
        'skills': 'react, redux, php',
        'name': 'Rishabh Mishra',
        'cv': 'file191.pdf'
      }
    ]
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
      this.setState({isLoading: false});
    })
  }

  handleCheckboxChange = (chechedCv, isChecked) => {
    const { candidatesData } = this.state;
    let clonedCandidatesData = Object.assign([], candidatesData);
    let currentCandidate = candidatesData.find(data => data.cv === chechedCv);
    currentCandidate = {...currentCandidate, isChecked: !isChecked};
    candidatesData.forEach((data,index) => {
      if(data.cv===chechedCv) {
        clonedCandidatesData[index] = currentCandidate;
      }
    })
    this.setState({ candidatesData: clonedCandidatesData });
  }

  handleSendEmail =()=> {
    const { candidatesData } = this.state;
    const selectedCandidate = candidatesData.filter(candidate => candidate.isChecked === true);
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
              const { recent_company, skills, email, name, cv, phone_number, isChecked = false } = data;
              return(
                <Fragment>
                  <div className="shadow p-3 mt-2 mb-2 bg-white rounded row candidate-row align-items-center">
                    <div className="col-1">
                      <i class="fa fa-user-circle-o fa-fw fa-3x"></i>
                    </div>
                    <div className="col-3">
                      <h4>{name}</h4>
                    </div>
                    <div className="col-4">
                      <div className="info">
                        <div className="location"><i class="fa fa-envelope fa-fw"></i> {email}</div>
                        <div className="work-post"><i class="fa fa-book fa-fw"></i> {skills}</div>
                      </div>
                    </div>
                    <div className="checkbox-div col-1">
                      <input type="checkbox" checked={isChecked} onChange={() => this.handleCheckboxChange(cv, isChecked)} />
                    </div>
                    <div className="col-3 text-right">
                      <Button>
                        <a href="#">View Resume</a>
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
