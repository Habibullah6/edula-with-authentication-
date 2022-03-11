import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import homeImage from '../../images/homeService.jpg'
import HomeServiceCard from '../HomeServiceCard/HomeServiceCard';
const HomeServices = () => {
    const [services] = useServices();
    const service = services.slice(0, 4);
    
    return (
        <div className='container mt-5'>
        <h1 className='fw-bold text-danger text-center'>Our Best Services</h1>  
        <div className='row justify-content-center align-items-center mt-5'>
            <div className="col-md-5">
               <img src={homeImage} alt="" className='w-100 img-fluid'/>
            </div>
            <div className="col-md-7 p-3">
            

               <Row className='row g-4' xs={1} md={2}>
               {
                 service.map(sv => <HomeServiceCard sv={sv} key={sv.fee}></HomeServiceCard>)
               }
               </Row>
            </div>
           
        </div>
        </div>
)
};

export default HomeServices;