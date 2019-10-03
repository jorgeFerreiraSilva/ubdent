import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact"
import Table from './table'

class SideNavPage extends Component {
  state = {
    sideNavLeft: false,
    sideNavRight: false
  }

sidenavToggle = sidenavId => () => {
  const sidenavNr = `sideNav${sidenavId}`
  this.setState({
    [sidenavNr]: !this.state[sidenavNr]
  });
};

render() {
    return (
      <Router>
        <MDBContainer style={{ marginTop: '2%', marginBottom: '2%', justifyContent: 'flex-end'}}>
            <Table />
          {/* <MDBBtn onClick={this.sidenavToggle("Left")}>
            <MDBIcon size="lg" icon="bars" />
          </MDBBtn> */}
          <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
            className="sn-bg-1 blue-gradient" color='indigo'>
            <li>
              <div className="logo-wrapper sn-ad-avatar-wrapper">
                <a href="#">
                  {/* <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" /> */}
                  <span style={{alignSelf: 'center' }}>Logo Ubdent</span>
                </a>
              </div>
            </li>
            <MDBSideNavNav>
              <MDBSideNavLink to="#" topLevel>
                <MDBIcon icon="pencil-alt" className="mr-2" />Anamneses</MDBSideNavLink>
              {/* <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat> */}
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
       </Router>
    );
  }
}

export default SideNavPage;