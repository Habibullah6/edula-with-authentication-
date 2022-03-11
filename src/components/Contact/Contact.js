import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
    <div className='container my-5 p-5 shadow-lg'>
    <h2 className='text-center fw-bold text-danger'>Get In Touch</h2>
    <Form>

    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  
  <Form.Label>Write your message here</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="Your Message">
  
    <Form.Control
      as="textarea"
      placeholder="Your Message"
      style={{ height: '100px' }}
    />
  </FloatingLabel>

  <Form.Group className="my-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I am not a robot" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
);
};

export default Contact;