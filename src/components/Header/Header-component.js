import React, { Component } from 'react';
import { Navbar, Nav,Form,FormControl,Button } from 'react-bootstrap';
import './Header.css'
class HeaderComponent extends Component {

  render() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="ctrlwidth">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
  }
}

export default HeaderComponent;