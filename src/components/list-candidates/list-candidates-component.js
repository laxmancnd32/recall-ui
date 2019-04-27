import React, { Component, Fragment } from 'react';
import { Table,Button } from 'react-bootstrap';
import { baseUrl } from '../../base-url';
import LoaderComponent from '../loader';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
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
        'cv': 'file.pdf'
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

  render() {
    const { isLoading, candidatesData } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    }else {
    return (
        <div>
          {
            candidatesData.map((data, index) => { 
              const { recent_company, skills, email, name, cv, phone_number } = data;
              return(
                <Fragment>
                  <div className="shadow p-3 mb-5 bg-white rounded row">
                    <i class="fa fa-user-circle-o fa-fw fa-3x"></i>
                    <h4><a href="candidate-details.html">{name}</a></h4>
                    <div className="info">
                      <span className="work-post"><a href="#"><i data-feather="check-square"></i>{skills}</a></span>
                      <span className="location"><a href="#"><i data-feather="map-pin"></i>{email}</a></span>
                    </div>
                    <Button>
                      <a href="#">View Resume</a>
                    </Button>
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
