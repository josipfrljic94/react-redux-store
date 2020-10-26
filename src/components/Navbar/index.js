import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { BsFillPersonFill } from "react-icons/bs";
import {FaShoppingCart} from "react-icons/fa";
import {LinkRouter, NavContainer} from "./MyNavbarE";





const MyNavbar = ({scroll}) => {
    return (
        <div>
    < NavContainer collapseOnSelect expand="lg" className="navbar" scroll={scroll}>
    <Navbar.Brand> <LinkRouter to="/"><h3>Logo</h3></LinkRouter></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto custom-nav ">
      <LinkRouter to="/women" className="link-nav text-dark">Women</LinkRouter>
      <LinkRouter to="/men" className="link-nav text-dark">Men</LinkRouter>
      <LinkRouter to="/" className="link-nav text-dark">New</LinkRouter>
    </Nav>
    <Nav className="second-nav" >
    
    
      <LinkRouter style={{fontSize:"1.6rem"}} to="/register" className="link-nav2 text-dark">
       <BsFillPersonFill/>
      </LinkRouter>
      <LinkRouter style={{fontSize:"1.6rem"}} to="/cart"  className="link-nav2 text-dark">
       <FaShoppingCart/>
      </LinkRouter>
    </Nav>
  </Navbar.Collapse>
</ NavContainer>
    </div>
    )
}

export default MyNavbar;
 