import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='container my-5 p-3'>
            <h1 className='text-danger fw-bold text-center'>Our All Services</h1>
            <Row xs={1} md={3} className="g-4 mt-3">
               {
                 services.map(sv => <ServicesCard sv={sv} key={sv.fee}></ServicesCard>)
               }
            </Row>
        </div>
    );
};

export default Services;