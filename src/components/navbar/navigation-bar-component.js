import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {

    render() {
        return (
            <div className='nav-bar-component'>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/jobs">Jobs</Nav.Link>
                        <Nav.Link href="/interviews">Interviews</Nav.Link>
                        <Nav.Link href="/candidate-pool">Candidate Pool</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
};

export default NavigationBar;