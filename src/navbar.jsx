import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="MainNavbar">

      <Container className='navbar'>

        <Navbar.Brand href="#"><img src="images/ImgNav.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='NavbarToggler' />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <HashLink className='navLink' to="/#action1">Latest Builds</HashLink>
            <HashLink className='navLink' to="/#action2">Process</HashLink>
            <HashLink className='navLink' to="/#action2">Services</HashLink>
            <HashLink className='navLink' to="/#action2">Contact Us</HashLink>
            <HashLink className='navLink' to="/#action2">Projects</HashLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;