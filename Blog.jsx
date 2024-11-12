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
import row1_img1 from './row1-car1.jpg'
import row1_img2 from './row1-car2.jpg'
import row1_img3 from './row1-car3.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import blog_img_1 from './blog-img-1.jpg'
import blog_img_2 from './blog-img-2.jpg'
import blog_img_3 from './blog-img-3.jpg'
import blog_img_4 from './blog-img-4.jpg'
import blog_img_5 from './blog-img-5.jpg'
import blog_img_6 from './blog-img-6.jpg'
import { MdArrowRightAlt } from "react-icons/md";

const Blog = () => {

   useEffect(() => {
    AOS.init({
      // Customize the animation duration
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
                <p>HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> BLOG <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>Our Blog</h1>
            </div>
      </div>



          {/* Blog-section */}

        <div className='blog-section'> 
              <div className='blog-section-content text-center'>
                  <img  src={blog_img_1}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>



                   <img  src={blog_img_2}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>




                   <img  src={blog_img_3}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>




                   <img  src={blog_img_4}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>


                   <img  src={blog_img_5}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>



                   <img  src={blog_img_6}></img>
                  <p className=' mt-4' style={{color: "#1089ff",fontWeight:'bold'}}>Oct. 29, 2019 Admin  3</p>
                  <h4 className=' mt-4'>Why Lead Generation is Key for Business Growth</h4>
                   <div style={{display:"grid",placeItems:"center"}}>
                       <p className='blog-para mt-4' style={{width: "1000px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                   </div>
                  <button>Continue <MdArrowRightAlt /></button>


                   <div style={{display:'flex',justifyContent:'center',marginTop:'80px'}}>
             <div className='page-navigate-section'>
               <div className='page-navigate'><MdKeyboardArrowLeft /></div>
               <div  className='page-navigate'>1</div>
               <div  className='page-navigate'>2</div>
               <div  className='page-navigate'>3</div>
               <div  className='page-navigate'>4</div>
               <div  className='page-navigate'>5</div>
               <div  className='page-navigate'><MdKeyboardArrowRight /></div>
          
           </div>
          </div>
              </div>


              
        </div>


                                 {/* footer*/}

       <div className="footer" style={{position:'relative',top : '6000px'}}>
        
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

export default Blog;
