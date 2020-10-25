import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBriefcaseFill} from "react-icons/bs";
import {LinkRouter} from "./MyNavbarE";





const MyNavbar = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className="navbar">
    <Navbar.Brand> <LinkRouter to="/"><h3>Logo</h3></LinkRouter></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto custom-nav ">
      <LinkRouter to="/women" className="link-nav text-dark">Women</LinkRouter>
      <LinkRouter to="/men" className="link-nav text-dark">Men</LinkRouter>
      <LinkRouter to="/" className="link-nav text-dark">New</LinkRouter>
    </Nav>
    <Nav className="second-nav">
    
    
      <LinkRouter to="/register" className="link-nav2 text-dark">
       <BsFillPersonFill/>
      </LinkRouter>
      <LinkRouter to="/cart"  className="link-nav2 text-dark">
       <BsFillBriefcaseFill/>
      </LinkRouter>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
    )
}

export default MyNavbar;
 