import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import Navbar and Nav from react-bootstrap
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
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";
import pricing_car_1 from './pricing-car-1.jpg';
import readBlog_person from './readBlog-person.jpg' 
import blog_img_1 from './blog-img-1.jpg'
import blog_img_2 from './blog-img-2.jpg'
import blog_img_3 from './blog-img-3.jpg'

const ReadBlog = () => {
 
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
                <p>HOME <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> PRICING <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> BLOG SINGLE <span style={{fontSize:'20px'}}><MdKeyboardArrowRight /></span> </p>
                <h1>Read Our Blog</h1>
            </div>
      </div>




                   {/* Read-our-blog */}

     <div className=' Read-our-blog'>
          <div className=' Read-our-blog-section'>
              <Row>
                  <Col  className='read-blog-text col-8'>
                      <h3>It is a long established fact a reader be distracted</h3>
                      <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
                      </p>

                       <p className='mt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
                      </p>



                       <h3 className='mt-5'>#2. Creative WordPress Themes</h3>
                      <p className='mt-3'>
                       Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
                      </p>

                       <p className='mt-5'>
                       Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
                      </p>

                      <p className='mt-3'>
                          Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
                      </p>

                      <p className='mt-3'>
                        Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
                      </p>

                      <p className='mt-3'>
                         Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?
                      </p>


                      <div style={{marginLeft:'0px'}} id='read-btn' className='mt-5'>
                          <button>LIFE</button>
                          <button>SPORT</button>
                          <button>TECH</button>
                          <button>TRAVEL</button>
                      </div>



                       <div className='read-blog-person d-flex mt-5'>
                          <div>
                             <img style={{width :'130px',height:'130px'}} src={readBlog_person}></img>
                          </div>
                          <div className='read-blog-person-para'> 
                             <h3>George Washington</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                          </div>
                       </div>


                       <div className='mt-5'>
                           <h3 style={{ color: 'rgba(0, 0, 0, 0.8)'}}>6 Comments</h3>
                       </div>

                       <div className='comments mt-5'>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>


                         <div className='comments mt-5'>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>

                         <div style={{width:'690px',position:'relative',left:'50px',marginTop:'100px'}} className='comments mt-5'>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>


                       
                         <div style={{width:'649px',position:'relative',left:'100px',marginTop:'100px'}} className='comments mt-5'>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>

                        <div style={{width:'600px',position:'relative',left:'160px',marginTop:'100px'}} className='comments mt-5'>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>


                 <div className='comments mt-5' style={{marginTop:'200px'}}>
                          <div><img style={{width :'50px',height:'50px',borderRadius:'50%'}}  src={readBlog_person}></img></div>
                          <div>
                             <h4>John Doe</h4>
                             <h6 style={{color:'#007bff',letterSpacing : '1px'}}>Oct. 29, 2019 at 1:21pm</h6>
                             <p className='mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <button>REPLY</button>
                             
                          </div>
                       </div>
                

                <div className='leave-acomment mt-5'>
                    <h3 className='mt-5'>Leave a comment</h3>
                      <div className='form-validation'>
                  <Container className='mt-5'>
                          <Form>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label style={{ color: "#999999",fontSize:'15px'}}>Name *</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label style={{ color: "#999999",fontSize:'15px'}}>Email *</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
 
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label style={{ color: "#999999",fontSize:'15px'}}>Website</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Label style={{ color: "#999999",fontSize:'15px'}}>Message</Form.Label>
                              <Form.Control type="text" />
                            </Form.Group>

                              <Button style={{width:'160px',height:'60px'}} className='primary'>Post Comment</Button>
                            
                          </Form>
                  </Container>

               </div>

                </div>

                   </Col>

         <Col  className='col-4 form-group-section'>
             <div style={{marginRight:'0px'}} className='form-group '>
                   <input type='text' placeholder='Type a keyword and hit enter'></input>
                   <span><CiSearch /></span>
             </div>

             <div style={{marginTop:'60px'}} className='catagorie '>
                  <h3 style={{marginLeft:'29px',lineHeight:'1.5',
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: '400'
}}>Categories</h3>
                 <ul className='mt-4'>
                     <li style={{borderBottom: '1px solid #dee2e6',listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between '>
                         <a style={{textDecoration:'none',color:'black'}} href=''><p>Ferrari</p></a>
                         <span style={{color: '#999999'}}>(12)</span>
                     </li>

                      <li style={{borderBottom: '1px solid #dee2e6',listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between  '>
                         <a style={{textDecoration:'none',color:'black'}} href=''><p>Cheverolt</p></a>
                         <span style={{color: '#999999'}}>(22)</span>
                     </li>

                      <li style={{borderBottom: '1px solid #dee2e6',listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between  '>
                         <a style={{textDecoration:'none',color:'black'}} href=''><p>Ford</p></a>
                         <span style={{color: '#999999'}}>(37)</span>
                     </li>

                      <li style={{borderBottom: '1px solid #dee2e6',listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between  '>
                         <a style={{textDecoration:'none',color:'black'}} href=''><p>Subaru</p></a>
                         <span style={{color: '#999999'}}>(42)</span>
                     </li>

                      <li style={{borderBottom: '1px solid #dee2e6',listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between  '>
                         <a style={{textDecoration:'none',color:'black'}} href=''><p>Toyota</p></a>
                         <span style={{color: '#999999'}}>(14)</span>
                     </li>

                      <li style={{listStyle:'none' ,paddingBottom:'10px'}} className='d-flex justify-content-between  '>
                         <a className='mt-2' style={{textDecoration:'none',color:'black'}} href=''><p>Mistsubishi</p></a>
                         <span style={{color: '#999999'}}>(140)</span>
                     </li>
                 </ul>


                 <div className='Recent-Blog mt-5'>
                     <h3 style={{marginLeft:'29px',lineHeight:'1.5',
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: '400'
}}>Recent Blog</h3>

                     <div className='mt-4' style={{display:'flex',gap:'20px',marginLeft:'29px'}} >
                          <div><img style={{width:'100px',height:'80px'}} src={blog_img_1}></img></div>
                          <div>
                                <h4 style={{fontSize:'18px'}}>Why Lead Generation is Key for Business Growth</h4>
                                <p style={{color:'#999999'}}>Oct. 29, 2019  Admin  19</p>
                          </div>
                     </div>

  <div className='mt-4' style={{display:'flex',gap:'20px',marginLeft:'29px'}} >
                          <div><img style={{width:'100px',height:'80px'}} src={blog_img_2}></img></div>
                          <div>
                                <h4 style={{fontSize:'18px'}}>Why Lead Generation is Key for Business Growth</h4>
                                <p style={{color:'#999999'}}>Oct. 29, 2019  Admin  19</p>
                          </div>
                     </div>

  <div className='mt-4' style={{display:'flex',gap:'20px',marginLeft:'29px'}} >
                          <div><img style={{width:'100px',height:'80px'}} src={blog_img_3}></img></div>
                          <div>
                                <h4 style={{fontSize:'18px'}}>Why Lead Generation is Key for Business Growth</h4>
                                <p style={{color:'#999999'}}>Oct. 29, 2019  Admin  19</p>
                          </div>
                     </div>

                     
                 </div>
             </div>


             <div>
                   <h3 style={{marginLeft:'29px',lineHeight:'1.5',
                            color: 'rgba(0, 0, 0, 0.8)',
                            fontWeight: '400',
                            marginTop:'70px'
                        }}>Tag Cloud
                    </h3>

                    <div id='read-btn' className='mt-5'>
                          <button>DISH</button>
                          <button>MENU</button>
                          <button>FOOD</button>
                          <button>SWEET</button>
                          <button>TASTY</button>
                          
                      </div>

                      <div id='read-btn' className='mt-3'>
                            <button style={{width:'80px'}}>DELICIOUS</button>
                            <button style={{width:'70px'}}>DESSERTS</button>
                            <button>DRINKS</button>
                          </div>
             </div>


             <div>

                <h3 style={{marginLeft:'29px',lineHeight:'1.5',
                            color: 'rgba(0, 0, 0, 0.8)',
                            fontWeight: '400',
                            marginTop:'70px'
                        }}>Paragraph
                    </h3>

                    <p className='mt-3' style={{color:'#999999',fontSize:'18px',marginLeft:'29px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
         </Col>
              </Row>
          </div>
     </div>



                                 {/* footer*/}

        <div className="footer" style={{position:'relative',top:'90px'}}>
        
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

export default ReadBlog