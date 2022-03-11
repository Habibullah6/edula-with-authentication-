import React from 'react';
import {FaArrowAltCircleRight} from "react-icons/fa"
import bannerOne from '../../images/bannerOne.png';
import bannerTwo from '../../images/bannerTwo.png'
const Banner = () => {
    return (
    <div id="carouselExampleIndicators" className="carousel slide container mt-3" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='bg-primary'></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src={bannerOne} className="d-block w-100" alt="..."/> */}
      <div className="row justify-content-between align-items-center">
        <div className='col-md-7 text-start'>
          <h1 className='fw-bold text-danger'>Improve your any</h1>
          <h1 className='fw-bold text-danger'>Educational skills</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eaque quae.</p>
          <button className='btn btn-danger'>Hire a coach now  <FaArrowAltCircleRight/></button>
        </div>
        <div className='col-md-5'>
          <img src={bannerOne} className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    
    <div className="carousel-item">
     
      <div className="row justify-content-between align-items-center">
        <div className="col-md-7 text-start">
            <h1 className='fw-bold text-danger'>Better education</h1>
            <h1 className='fw-bold text-danger'>for a better world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique repellendus doloremque aut.</p>
            <button className='btn btn-danger'>Hire a coach now  <FaArrowAltCircleRight/></button>
        </div>
        <div className='col-md-5'>
            <img src={bannerTwo} className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </div>
  
</div>
);
};

export default Banner;