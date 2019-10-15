import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdbreact';
import Table from './table';

const SideNavPage = () => {
  // state = {
  //   sideNavLeft: false,
  //   sideNavRight: false
  // };

  // sidenavToggle = sidenavId => () => {
  //   const sidenavNr = `sideNav${sidenavId}`;
  //   this.setState({
  //     [sidenavNr]: !this.state[sidenavNr]
  //   });
  // };

  // render() {
  return (
    <MDBContainer
      style={{
        marginTop: '2%',
        marginBottom: '2%',
        justifyContent: 'flex-end'
      }}
    >
      <Table />
      <MDBSideNav
        slim
        fixed
        mask="rgba-blue-strong"
        // triggerOpening={this.state.sideNavLeft}
        breakWidth={1300}
        className="sn-bg-1 blue-gradient"
        color="indigo"
      >
        <li>
          <div className="logo-wrapper sn-ad-avatar-wrapper">
            <a href="#">
              <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
              <span style={{ alignSelf: 'center' }}>Logo Ubdent</span>
            </a>
          </div>
        </li>
        <MDBSideNavNav>
           <a href="#">
              {/* <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" /> */}
              <span style={{ alignSelf: 'center' }}>Logo Ubdent</span>
            </a>
           <a href="#">
              {/* <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" /> */}
              <span style={{ alignSelf: 'center' }}>Logo Ubdent</span>
            </a>
           <a href="#">
              {/* <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" /> */}
              <span style={{ alignSelf: 'center' }}>Logo Ubdent</span>
            </a>
          {/* <MDBSideNavLink to="#" topLevel>
              <MDBIcon icon="pencil-alt" className="mr-2" />
              Anamneses
          </MDBSideNavLink> */}
        </MDBSideNavNav>
      </MDBSideNav>
    </MDBContainer>
  )
  // }
};

export default SideNavPage;
