import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Navbar} from "react-bootstrap";

export const NavContainer=styled(Navbar)`
min-height:${({scroll})=>(scroll  ? "10vh" : "12vh")};
width:100%;
background:#fafafa;
top:0;
left:0;
position:${({scroll})=>(scroll  ? "fixed" : "sticky")};
transition:0.2s ease-in-out;
z-index:999;
`
export const LinkRouter=styled(LinkR)`
color:#0d0d0d;
font-size:1.1rem;
&:hover{
    text-decoration:none;
    color:#0a0a0a;
}
@media screen and (max-width:768px){
    font-size:1.3rem;
}

`