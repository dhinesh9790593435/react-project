import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav from react-bootstrap
import { CiMenuBurger } from 'react-icons/ci'; // Import the menu icon
import { IoPlaySharp } from 'react-icons/io5'; // Import the play icon
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img from "./about.jpg";
import Container from "react-bootstrap/Container";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaRoad } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import bg from './bg_3.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdArrowRightAlt } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { PiAddressBookLight } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Contact = () => {

   useEffect(() => {
    AOS.init({
      
    });
  }, []);

 
  return (
    <main>
      <div className="home-section" style={{
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 50%), url(${bg})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    height: '600px' 
    }}>

        {/* Navbar Start */}

        <div className="nav-bar">

          <div className="navbar-center">
            <Navbar expand="lg">
              <Navbar.Brand className="logo" href="#home">
                <h1>CAR<span>BOOK</span></h1>
              </Navbar.Brand>
              <Navbar.Toggle className="menu" aria-controls="basic-navbar-nav">
                <h3 className="toggle-menu"><CiMenuBurger /></h3>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="links" className="me-auto">
                  <Nav.Link className="nav-item active" href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#cars">Cars</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

        </div>


          <div className='about-contents'>
                <p>HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> CONTACT <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>Contact Us</h1>
            </div>
      </div>


                       {/* contact-section */}


        <div className='contact-section' style={{marginTop:'100px',marginBottom:'100px'}}>
            <div className='contact-section-content'>
               <div className='addres'>
                <div className='addres-1 d-flex'>
                    <div>
                        <h3><PiAddressBookLight /></h3>
                    </div>
                    <div className='address-content'>
                       <p>Address :</p>
                       <h5>198 West 21th Street, Suite 721</h5>
                       <h5>New York NY 10016</h5>
                    </div>
                </div>


                 <div  className='addres-1 d-flex mt-2'>
                    <div>
                      <h3><IoPhonePortraitOutline /></h3>
                    </div>
                    <div className='address-content'> 
                       <p>Phone:</p>
                      <h5>+ 1235 2355 98</h5>
                    </div>
                </div>
                

                 <div className='addres-1 d-flex mt-2' >
                    <div><h3><CiMail /></h3></div>
                    <div className='address-content'>
                        <p>Address :</p>
                       <h5>198 West 21th Street, Suite 721</h5>
                    </div>
                </div>


               </div>



               <div className='form-validation'>
                  <Container>
                          <Form>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              
                              <Form.Control id='textArea' as="textarea" placeholder='Message' rows={6} />
                            </Form.Group>


                            <Button id='form-validation-button' variant="primary" type="submit">
                              Send Message
                            </Button>
                          </Form>
                  </Container>

               </div>

               
            </div>     
        </div>               

          
                                 {/* footer*/}

       <div className="footer" style={{position:'relative',top : '0px'}}>
        
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


    </main>
  );
};

export default Contact;
