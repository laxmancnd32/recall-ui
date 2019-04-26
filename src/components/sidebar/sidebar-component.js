import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

class SideBarComponent extends Component {

    routeToPage = route => {
        const { history } = this.props;
        history.push(route);
    };

    render() {
        return (
            <div className='nav-bar-component'>
                <SideNav onSelect={selected => this.routeToPage('/'+selected)}>
                  <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="dashboard">
                      <NavItem eventKey="dashboard">
                        <NavIcon>
                          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                          Dashboard
                        </NavText>
                      </NavItem>
                      <NavItem eventKey="jobs">
                        <NavIcon>
                          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        </NavIcon>
                        <NavText>
                          Jobs
                        </NavText>
                      </NavItem>
                      <NavItem eventKey="interview-pool">
                        <NavIcon>
                            <i className="fa fa-suitcase" aria-hidden="true"></i>
                        </NavIcon>
                        <NavText>
                          Interviewers
                        </NavText>
                      </NavItem>
                  </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
};

export default SideBarComponent;