import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./header.css";

class HeaderComponent extends Component {

  render() {
    return (
        <div className='home-page-header'>
            <Row>
            <Col xs={12}>
            </Col>
         </Row> 
        </div>          
    );
  }
}

export default HeaderComponent;
