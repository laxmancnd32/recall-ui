import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
import { baseUrl } from '../../base-url';
import LoaderComponent from '../loader';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      candidatesData: []
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
      this.setState({candidatesData: response, isLoading: false});
    })
  }

  render() {
    const { isLoading } = this.state;
    if(isLoading){
      return (<LoaderComponent />);
    }else {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded">
          <div className="row">
          <i class="fa fa-user-circle-o fa-fw fa-3x"></i>
            <h4><a href="candidate-details.html">Lula Wallace</a></h4>
            <div className="info">
              <span className="work-post"><a href="#"><i data-feather="check-square"></i>Senior UI / UX Designer</a></span>
              <span className="location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
            </div>
            <Button>
              <a href="#">View Resume</a>
            </Button>
          </div>   
        </div>
      );
    }
  }
}

export default List;
