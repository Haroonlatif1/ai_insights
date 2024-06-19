import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./assets/navbar.css"
const navbar = () => {
  return (
    <div><Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">My Insights</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         <Nav.Link  ><Link to="/"  className='link-custom'>insights</Link></Nav.Link> 
          <Nav.Link><Link to="/report" className='link-custom' >Report</Link></Nav.Link>
          <Nav.Link><Link to="/dataset" className='link-custom' >dataset</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default navbar