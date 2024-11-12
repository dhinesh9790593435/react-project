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
import Table from 'react-bootstrap/Table';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";
import pricing_car_1 from './pricing-car-1.jpg';
import pricing_car_2 from './pricing-car-2.jpg';
import pricing_car_3 from './pricing-car-3.jpg';
import pricing_car_4 from './pricing-car-4.jpg';
import pricing_car_5 from './pricing-car-5.jpg';
import pricing_car_6 from './pricing-car-6.jpg';

const Pricing = () => {
 
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
                <p>HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> PRICING <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>Pricing</h1>
            </div>
      </div>




                   {/* pricing-section */}


    <div className='pricing-section' style={{marginTop:'100px'}}>
         <div className='pricing-section-content'>
  <Table>
  <thead>
    <tr >
      <th ></th>
      <th></th>
      <th style={{ backgroundColor: '#1089ff', color: 'white',textAlign:'center',borderRight:'1px solid #fff' }}><h6 style={{
marginBottom:'27px'
      }}>Per Hour Rate</h6></th>
      <th style={{ backgroundColor: '#343a40', color: 'white',borderRight:'1px solid #fff' }}><h6 style={{
marginBottom:'27px'
      }}>Per Hour Rate</h6></th>
      <th style={{ backgroundColor: '#000000', color: 'white',borderRight:'1px solid #fff' }}><h6 style={{
marginBottom:'27px'
      }}>Per Hour Rate</h6></th>
    </tr>
  </thead>

  
  <tbody>
    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_1} alt="Car" />
      </td>
      <td >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div id='data-content' >
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span >$3/hour fuel surcharges</span>
            <button className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
            
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>



    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_2} alt="Car" />
      </td>
      <td >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div id='data-content' >
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span>$3/hour fuel surcharges</span>
            <button  className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>



    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_3} alt="Car" />
      </td>
      <td >
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div  id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span>$3/hour fuel surcharges</span>
            <button className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>




    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_4} alt="Car" />
      </td>
      <td >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span>$3/hour fuel surcharges</span>
            <button  className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>

    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_5} alt="Car" />
      </td>
      <td >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span>$3/hour fuel surcharges</span>
            <button className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>

    <tr >
      <td>
        <img style={{marginTop:'20px'}} src={pricing_car_6} alt="Car" />
      </td>
      <td >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           <div>
              <p style={{fontSize:'18px',lineHeight: '1.5',
             color: 'rgba(0, 0, 0, 0.8)',fontWeight:'400',marginTop:'32px'}}>Chevrolet SUV Car</p>
              <div className='d-flex'>
                  <p style={{fontSize:'18px',marginTop:'2px'}}>rated:</p>
                  <div style={{display:'flex',marginLeft:'5px'}}>
                  <h5 style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'#01d28e'}}><IoStar /></h5>
                  <h5  style={{color:'rgba(0, 0, 0, 0.1)'}}><IoStar /></h5>
                  </div>
                  
              </div>
           </div>
        </div>
      </td>
      <td id='table-data-hover' style={{display:'flex',justifyContent:'center',borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
         <div id='data-content' >
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px'}}>$10.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span>$3/hour fuel surcharges</span>
            <button className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$60.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
      <td id='table-data-hover' style={{borderRight:'1px solid #fff',borderBottom:'1px solid #fff'}}>
           <div id='data-content'>
            <p style={{color:'#007bff',fontSize:'20px',marginTop:'32px',marginLeft:'30px'}}>$995.99 <span style={{color: '#999999'}}>/per hour</span></p>
            <span style={{marginLeft:'30px'}}>$3/hour fuel surcharges</span>
            <button style={{position:'relative',left:'35px'}} className='rend-a-car'>Rend a car</button>
         </div>
      </td>
    </tr>

    

    
  </tbody>
</Table>


         </div>
    </div>



                                 {/* footer*/}

        <div className="footer" style={{position:'relative',top:'800px'}}>
        
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
}

export default Pricing