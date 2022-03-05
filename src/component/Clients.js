import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Slider from "react-slick";

import Img1 from '../assets/images/testi-img/img-1.png';
import Img2 from '../assets/images/testi-img/img-2.png';
import Img3 from '../assets/images/testi-img/img-3.png';
import Img4 from '../assets/images/testi-img/img-4.png';

import HomeUrl from '../assets/images/home-border.png';

import Client1 from '../assets/images/clients/1.png';
import Client2 from '../assets/images/clients/2.png';
import Client3 from '../assets/images/clients/3.png';
import Client4 from '../assets/images/clients/4.png';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          name: 'Brandon Carney',
          designation: 'Designer',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 101,
          img: Img2,
          name: 'Samuel Campbell',
          designation: 'Developer',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 103,
          img: Img3,
          name: 'Michelle Stehle',
          designation: 'Manager',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 104,
          img: Img4,
          name: 'Margaret Lampley',
          designation: 'CEO',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
      ],
    };
  }
  render() {

    var slidesettings = {
      dots: true,
      speed: 300,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + '/images/img-' + (i+1) +'.jpg'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
        );
      },
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        <div className="carousel-item" key={slideitem.id}>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="client-box mt-4">
                <h5 className="line-height_1_6">{slideitem.description}</h5>
                <div className="client-icon">
                  <i className="mdi mdi-format-quote-close"></i>
                </div>
                <h5 className="f-18">{slideitem.name} </h5>
                <p className="text-primary mb-0">- {slideitem.designation} </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-4">
                <img src={slideitem.img} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <React.Fragment>
        {/* <section className="section" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Clients Loved Products</h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="section bg-clients" style={{padding: '0px 0px 100px 0px'}}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">What else does BizDateUp bring to the table?</h3>
                  <p className="text-muted f-17 mt-3">
Running a startup is challenging. To cater to these issues,<br/> BizDateUp keeps coming up with services that fit every need that a founder can think of while running a startup.
</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center" style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Pitch Deck</h4>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center" style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}} >Mentorship Sessions</h4>              
                 </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center" style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Legal Solutions</h4>
                               </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center" style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Website and App</h4>                
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center" style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Intern & Hr recruitment</h4>                
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-1  text-center " style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Employee financial planning</h4>                
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center " style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)", borderRadius: "5px"}}>Talent management</h4>                
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className="client-images mt-4">
                <h4 className="title-heading mt-4 p-2 text-center " style = {{background: "linear-gradient(to right, #2980b9, #6dd5fa, #2990b9)",  borderRadius: "5px"}}>Market consultancy</h4>                
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </React.Fragment>
    );
  }
}
