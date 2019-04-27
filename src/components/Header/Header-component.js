import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'
class HeaderComponent extends Component {

  render() {
    return (
        <div>
            <Navbar className="ctrlwidth" id="header-nav">
                <Navbar.Brand href="#home" id="brand-name">Recall</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <a href="" className="header-link"><i class="fa fa-power-off fa-fw"></i> Logout</a>
            </Navbar>
        </div>
    );
  }
}

export default HeaderComponent;