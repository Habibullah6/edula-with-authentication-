import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const NavBar = () => {


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
        <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
        <Nav.Link as={NavLink} to='/services'>Services</Nav.Link>
        <Nav.Link as={NavLink} to='/contact'>Contact us</Nav.Link>
        {
          user.displayName? <Nav.Link onClick={handleSignOut}> <span className='border border-success p-2'>Logout</span> </Nav.Link>:<Nav.Link as={NavLink} to='/login'>Sign in</Nav.Link>
        }
        <Nav.Link>{user.displayName}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);
};

export default NavBar;