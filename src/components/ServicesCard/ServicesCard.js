import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ServicesCard = (props) => {
    const {img, course, description, fee} = props.sv;
    return (
        <Col>
        <Card className='shadow-lg rounded border-0' style={{textAlign: 'justify'}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className='fw-bold text-danger'>{course}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Title className='fw-bold text-danger fs-2'>
               {fee}
            </Card.Title>
            <NavLink to='*'><button className='btn btn-danger'>Enroll Now <FaCartArrowDown/></button></NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServicesCard;