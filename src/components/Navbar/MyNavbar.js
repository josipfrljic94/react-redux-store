import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBriefcaseFill} from "react-icons/bs";




const MyNavbar = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" className="navbar">
  <Navbar.Brand href="#home"><h3>Logo</h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto custom-nav ">
      <Nav.Link href="#features" className="link-nav text-dark">Women</Nav.Link>
      <Nav.Link href="#pricing" className="link-nav text-dark">Men</Nav.Link>
      <Nav.Link href="/" className="link-nav text-dark">New</Nav.Link>
    </Nav>
    <Nav className="second-nav">
      <Nav.Link href="#deets"  className="link-nav2 text-dark"><BsSearch/></Nav.Link>
      <Nav.Link href="#memes" className="link-nav2 text-dark">
       <BsFillPersonFill/>
      </Nav.Link>
      <Nav.Link href="#memes"  className="link-nav2 text-dark">
       <BsFillBriefcaseFill/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
    )
}

export default MyNavbar
 