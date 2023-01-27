import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaCopyright, FaFacebook, FaInstagram, FaPinterest, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    
    return (
    <div className='bg-light p-5 ' style={{textAlign: 'justify'}}>  
    <div className="container">
    <div className="row justify-content-center align-items-center">
    <div className="col-xl-3 col-md-6">
      <h5 className='fw-bold'>EDULA</h5>
       <div className='social-media-icon'>
           <a href="https://www.facebook.com"><FaFacebook/></a>
           <a href="https://www.facebook.com"><FaInstagram/></a>
           <a href="https://www.facebook.com"><FaWhatsapp/></a>
           <a href="https://www.facebook.com"><FaPinterest/></a>
       </div> <br/>
       <small>Copyright <FaCopyright/> 2022 by Habib. </small> <br/>
       <small>All Rights Reserved.</small> 
    </div>
    <div className="col-xl-3 col-md-6">
      <br/>
      <div>
      <h5 className='fw-bold'>DHAKA</h5>
      <small>88/2 Dhanmondi, Dhaka-1207</small> 
      
      </div> <br/>
      <div> 
        <h5 className='fw-bold'>CHITTAGONG</h5>
        <small>Port Building Chittagong 4100</small>
      </div> <br/>
    </div>
    <div className="col-xl-3 col-md-6">
      <div>
        <h5 className='fw-bold'>SUPPORT</h5>
        <small>nomanhabibullah65@gmail.com</small> 
        
      </div> <br/>
      <div>
        <h5 className='fw-bold'>PHONE</h5>
        <small>+88-01761461800</small>
      </div><br/>
    </div>
    <div className="col-xl-3 col-md-6">
      <h5 className='fw-bold'>STAY IN TOUCH</h5>
      <InputGroup className="mb-3">
      <FormControl
      placeholder="Enter Email"
      aria-label="Enter Email"
      aria-describedby="basic-addon2"/>
      <Button className='btn btn-danger' id="button-addon2" style={{fontSize: '1.6rem'}}><FaTelegramPlane/></Button>
      </InputGroup>
    </div>
   </div>
   </div>
   </div>
    );
};

export default Footer;