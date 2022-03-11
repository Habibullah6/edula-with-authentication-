import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';





const HomeServiceCard = (props) => {
    const {course, img, description, fee} = props.sv;
    
    return (
        <Col>
        <Card className='shadow-lg p-2 border-0' style={{textAlign: 'justify'}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{course}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text className='fw-bold text-danger fs-2'>
               {fee} 
            </Card.Text>
                <NavLink to='*'><button className='btn btn-danger'>Enroll Now <FaCartArrowDown/></button></NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default HomeServiceCard;