import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
class List extends Component {

  render() {
    return (
       <div>
            <Table className="table table-borderless">
            <div className="shadow p-3 mb-5 bg-white rounded">
                <tr>
                    <th><i class="fa fa-user-circle-o fa-fw fa-3x"></i></th>
                    <th><h4><a href="candidate-details.html">Lula Wallace</a></h4></th>
                     <th><div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Senior UI / UX Designer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                        </div>
                    </th> 
                    <th><Button>
                        <a href="#">View Resume</a>
                     </Button>
                    </th>
                 </tr>   
                   
            
            </div>
            </Table>
        </div>
     
    );
  }
}

export default List;
