import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoPlaySharp } from "react-icons/io5";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import img from "./about.jpg";
import Card from "react-bootstrap/Card";
import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_3 from "./image_3.jpg";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
// import hand from './image/hand.png';
import { LiaHandshakeSolid } from "react-icons/lia";
import { FaRoute } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
// import Slide from './slide';
import "swiffy-slider/css";
import { CiMenuBurger } from "react-icons/ci";
import About from "./About";
// import {useLocation,Routes,Route,Link} from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from 'react-countup';

const Home = () => {

  useEffect(() => {
    AOS.init({
      // Customize the animation duration
    });
  }, []);

  return (
    <main>
      <div className="home-section">
        {/* navbar-start */}

        <div className="nav-bar">
          <div className="navbar-center">
            <div>
              <Navbar expand="lg">
                <Navbar.Brand className="logo" href="#home">
                  <h1>
                    CAR<span>BOOK</span>
                  </h1>
                </Navbar.Brand>
                <Navbar.Toggle
                  className="menu"
                  aria-controls="basic-navbar-nav"
                >
                  <h3 className="toggle-menu">
                    <CiMenuBurger />
                  </h3>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav id="links" className="me-auto">
                    <Nav.Link className="nav-item active" href="#home">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#link">Pricing</Nav.Link>
                    <Nav.Link href="#home">Cars</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>

        {/* home-content */}

        <div className="content">
          <div className="home-content">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="home-letter"
            >
              <h1>Fast & Easy Way To Rent A Car</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.<br></br> It is a paradisematic
                country, in which roasted parts
              </p>
              <div className="home-video">
                <a href="">
                  <div className="green-round">
                    <h1>
                      <IoPlaySharp />
                    </h1>
                  </div>
                  <div id="line"></div>
                  <p>Easy steps for renting a car</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* form-section */}

        <div className="form-section">
          <div className="forms">
            <Container>
              <Row>
                <Col
                  id="form"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="col-lg-4 col-md-4 col-sm-12 col-12"
                >
                  <Form>
                    <h2 className="mb-3">Make your trip</h2>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pick-up location</Form.Label>
                      <Form.Control
                        id="place"
                        type="email"
                        placeholder="City,Airport,Station etc"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Drop-off location</Form.Label>
                      <Form.Control
                        id="place"
                        type="email"
                        placeholder="City,Airport,Station etc"
                      />
                    </Form.Group>
                    <div className="date">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Pick-up date</Form.Label>
                        <Form.Control
                          className="date"
                          id="place"
                          type="name"
                          placeholder="Date"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Drop-off date</Form.Label>
                        <Form.Control
                          className="date"
                          id="place"
                          type="name"
                          placeholder="Date"
                        />
                      </Form.Group>
                    </div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pick-up time</Form.Label>
                      <Form.Control
                        id="place"
                        type="email"
                        placeholder="Time"
                      />
                    </Form.Group>
                    <Button className="button" variant="success">
                      Rent a Car Now
                    </Button>{" "}
                  </Form>
                </Col>

                {/* perfect-section */}

                <Col
                  id="perfect-cars"
                  className="col-lg-8 col-md-8 col-sm-12 col-12 "
                >
                  <div>
                    <h1>Better Way to Rent Your Perfect Cars</h1>
                    <div>
                      <Container className="perfect-car-container">
                        <Row>
                          <Col
                            data-aos="fade-up"
                            data-aos-duration="800"
                            className="column-1 col-lg-4 col-md-4 col-sm-12 col-12"
                          >
                            <div className="mt-4 handshake">
                              <h3>
                                <FaRoute />
                              </h3>
                            </div>
                            <h2>Choose Your Pickup Location</h2>
                          </Col>

                          <Col
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            className="column-1 col-lg-4 col-md-4 col-sm-12 col-12"
                          >
                            <div className="mt-4 handshake">
                              <h3>
                                <LiaHandshakeSolid />
                              </h3>
                            </div>
                            <h2>Select the Best Deal</h2>
                          </Col>

                          <Col
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            className="column-1 col-lg-4 col-md-4 col-sm-12 col-12"
                          >
                            <div className="mt-4 handshake">
                              <h3>
                                <FaCar />
                              </h3>
                            </div>
                            <h2>Reserve Your Rental Car</h2>
                          </Col>
                          <button
                            style={{ width: "220px" }}
                            className="reserve-btn"
                          >
                            Reserve Your Perfect Car
                          </button>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* about-page */}

      <Container fluid className="about">
        <Row>
          <Col id="about-1" className="col-lg-4 col-md-4 col-sm-12">
            <Image style={{ width: "550px" }} src={img} />
          </Col>
          <Col id="about-2" className="col-lg-8 col-md-8 col-sm-12">
            <div data-aos="fade-up"  data-aos-duration="1000" className="about-content">
              <h3  >ABOUT US</h3>
              <h1  >Welcome to Carbook</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. A small river named
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>

              <button className="Search-btn">Search Vehicle</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Our latest product */}

      <div className="latest-product">
        <div className="latest-center">
          <h3 data-aos="fade-up"  data-aos-duration="1000">SERVICES</h3>
          <h1 data-aos="fade-up"  data-aos-duration="1000">Our Latest Services</h1>
          <Container>
            <Row className="mt-5">
              <Col className="product-1 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div></div>
                </div>
                <h3 className="mt-4">Wedding Ceremony</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div></div>
                </div>
                <h3 className="mt-4">City Transfer</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div></div>
                </div>
                <h3 className="mt-4 ">Airport Transfer</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
              <Col className="product-1  col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="round">
                  <div></div>
                </div>
                <h3 className="mt-4">Whole City Tour</h3>
                <p className="mt-4 text-center">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* become a driver */}

      <div className="become-driver">
        <Col id="driver-1" className="col-4 "></Col>

        <Col id="driver-2" className="col-8">
          <div className="driver-content">
            <Container>
              <div data-aos="fade-up"  data-aos-duration="1000">
                <h1>Do You Want To Earn With</h1>
                <h1 className="mt-3">Us? So Don't Be Late.</h1>
                <button className="mt-3">Become A Driver</button>
              </div>
            </Container>
          </div>
        </Col>
      </div>

      {/* Blog-page */}

      <div className="bloge-page">
        <h1 data-aos="fade-up"  data-aos-duration="1000"> BLOG</h1>
        <h2 data-aos="fade-up"  data-aos-duration="1000"> Recent Blog</h2>

        <div className="blog-content mt-5">
          <div data-aos="fade-up"  data-aos-duration="800">
            <Card style={{ width: "22rem", border: "none" }}>
              <Card.Img id="card-img" variant="top" src={image_1} />
              <Card.Body style={{ position: "relative", right: "15px" }}>
                <Card.Title id="car-title">Oct. 29, 2019 Admin</Card.Title>
                <Card.Text className="mt-4" id="cart-text">
                  Why Lead Generation is Key for Business Growth
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>

          <div  data-aos="fade-up"  data-aos-duration="1000">
            <Card style={{ width: "22rem", border: "none" }}>
              <Card.Img id="card-img" variant="top" src={image_2} />
              <Card.Body style={{ position: "relative", right: "15px" }}>
                <Card.Title id="car-title">Oct. 29, 2019 Admin</Card.Title>
                <Card.Text className="mt-4" id="cart-text">
                  Why Lead Generation is Key for Business Growth
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>

          <div  data-aos="fade-up"  data-aos-duration="1200">
            <Card style={{ width: "22rem", border: "none" }}>
              <Card.Img id="card-img" variant="top" src={image_3} />
              <Card.Body style={{ position: "relative", right: "15px" }}>
                <Card.Title id="car-title">Oct. 29, 2019 Admin</Card.Title>
                <Card.Text className="mt-4" id="cart-text">
                  Why Lead Generation is Key for Business Growth
                </Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Numbers */}

      <div className="numbers-section">
        <Col data-aos="fade-up"  data-aos-duration="800" className="number-1 col-lg-3 col-md-3 col-sm-12 col-12">
          <h1><CountUp end={60} duration={2.5} separator="," /></h1>
          <h2>
            Year <br></br> Experienced
          </h2>
        </Col>
        <Col data-aos="fade-up"  data-aos-duration="1000" id="numbers-1" className="number-2 col-lg-3 col-md-3 col-sm-12 col-12">
          <h1><CountUp end={1090} duration={2.5} separator="," /></h1>
          <h2>
            Total<br></br>Cars
          </h2>
        </Col>
        <Col
          id="numbers-2"
          className="number-2 col-lg-3 col-md-3 col-sm-12 col-12"
          data-aos="fade-up"  data-aos-duration="1200"
        >
          <h1> <CountUp end={2590} duration={2.5} separator="," /></h1>
          <h2>
            Happy<br></br>Customers
          </h2>
        </Col>
        <Col
          id="numbers-3"
          className="number-2 col-lg-3 col-md-3 col-sm-12 col-12"
          data-aos="fade-up"  data-aos-duration="1400"
        >
          <h1><CountUp end={67} duration={2.5} separator="," /></h1>
          <h2>
            Total<br></br>Branches
          </h2>
        </Col>
      </div>

      {/* footer*/}

      <div className="footer">
        
        <div className="footer-center">
          <div className="footer-head">
            <div className="footer-heading-1">
              <h1>CAR</h1>
              <span>BOOK</span>
            </div>
            <p className="footer-para">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="footer-social-media">
              <h1 data-aos="fade-up"  data-aos-duration="800">
                <FaTwitter />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1000">
                <GrFacebookOption />
              </h1>
              <h1 data-aos="fade-up"  data-aos-duration="1200">
                <BsInstagram />
              </h1>
            </div>
          </div>

          <div className="footer-ifno">
            <h1>Information</h1>

            <p>About</p>
            <p>Services</p>
            <p>Term and Conditions</p>
            <p>Best Price Guarantee</p>
            <p>Privacy & Cookies Policy</p>
          </div>

          <div className="footer-customer">
            <h1>Customer Support</h1>
            <p>FAQ</p>
            <p>Payment Option</p>
            <p>Booking Tips</p>
            <p>How it works</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-question">
            <h1>Have a Questions?</h1>
            <div id="footer-icons" className="d-flex">
              <h2>
                <MdLocationOn />
              </h2>
              <p className="footer-para">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div id="footer-icons" className="d-flex">
              <h2>
                <FaPhone />
              </h2>
              <p> +2 392 3929 210</p>
            </div>

            <div id="footer-icons" className="d-flex">
              <h2>
                <IoMdMail />
              </h2>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* <Slide/> */}
    </main>
  );
}

export default Home