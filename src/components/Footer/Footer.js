import React from 'react';
import './Footer.css';
import {FaFacebook, FaWhatsapp, FaPinterest, FaInstagram, FaCopyright, FaTelegramPlane} from "react-icons/fa";
import { FormControl, InputGroup, Button } from 'react-bootstrap';


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
      <div>
      <h5 className='fw-bold'>DHAKA</h5>
      <small>88/2 Mirpur 12 pallabi.</small> <br/>
      <small>Dhaka 1216.</small> <br />
      
      </div><br />
      <div>
        <h5 className='fw-bold'>CHITTAGONG</h5>
        <small>28 Golden Gate.</small><br />
        <small>Chittagong Bangladesh.</small>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div>
        <h5 className='fw-bold'>WORKING WITH US</h5>
        <small>nomanhabibullah65@gmail.com</small> <br />
        <small>nomansk0@gmail.com</small>
      </div><br />
      <div>
        <h5 className='fw-bold'>PHONE</h5>
        <small>+88 963250145</small><br />
        <small>+88 963278966</small>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <h5 className='fw-bold'>STAY IN TOUCH</h5>
      <InputGroup className="mb-3">
      <FormControl
      placeholder="Enter Email"
      aria-label="Enter Email"
      aria-describedby="basic-addon2"/>
      <Button variant="outline-success" id="button-addon2" style={{fontSize: '1.6rem'}}><FaTelegramPlane/></Button>
      </InputGroup>
    </div>
   </div>
   </div>
   </div>
    );
};

export default Footer;