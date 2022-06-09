import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const NavBar = () => {
const activeStyle = {
  fontWeight: 'bold',
  color: 'salmon'
}

const {user, handleSignOut} = useAuth()


return (
    <Navbar collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={NavLink} to='/home' className='text-danger fw-bold fs-1'>EDULA</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to='/home' activeStyle={activeStyle}>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/about' activeStyle={activeStyle}>About</Nav.Link>
        <Nav.Link as={NavLink} to='/services' activeStyle={activeStyle}>Services</Nav.Link>
        <Nav.Link as={NavLink} to='/contact' activeStyle={activeStyle}>Contact us</Nav.Link>
        {
          user.email? <Nav.Link onClick={handleSignOut}> <span className='border border-success p-2'>Logout</span> </Nav.Link>:<Nav.Link as={NavLink} to='/login' activeStyle={activeStyle}>Sign in</Nav.Link>
        }
        <Nav.Link activeStyle={activeStyle}>{user.displayName}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default NavBar;