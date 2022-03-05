
import React, { Component } from "react";

import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import HomeUrl from '../assets/images/home-border.png';
import Feature from '../assets/images/features/img-3.png';
import NavBar from './Navbar/NavBar'


const Refundpolicy = () => {
      return (
        <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Refund Policy</h3>
                  <p className="text-muted f-17 mt-3">
                  The privacy policy (“Privacy Policy”) governs the use of the website of the BizDateUp platform [https://www.bizdateup.com/] (“Website”, “we”, “us”) and the services (“Services”) being provided on the Website. This Privacy Policy has been duly framed in accordance with the Information Technology Act, 2000 (“Act”) and the Rules made thereunder to ensure maximum protection to the information provided by its users (“you”). By using the Website, you agree to abide by the terms and conditions pertaining to collection, retention, and use of information set forth in this Privacy Policy. If you do not agree to the Privacy Policy, you may exit and cease to use the Website. This Privacy Policy is incorporated in the Terms and Conditions of the Bizdateup platform and any other agreement, in which there is a specific clause incorporating the Privacy Policy in such agreement. In the event of a conflict between the terms of such agreements and the Privacy Policy, the terms of such agreements will prevail and govern so long as they relate to matters specifically referenced herein and this Privacy Policy will apply with respect to all other matters.
Our registered users (“Members”) share their professional identities, engage with their network, exchange knowledge and professional insights, post and view relevant content, learn and find business and career opportunities. Content and data on some of our Services is viewable to non-members (“Visitors”).
                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            
          </Container>
        </section>
      </React.Fragment>
      ) ; 
}

export default Refundpolicy;