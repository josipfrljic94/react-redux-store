import styled from "styled-components";
import {Link} from "react-router-dom";


export const CardContainer=styled.div`
width:100%;
min-height:100vh;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));

justify-content:center;
align-items:top;
gap:5px;
flex-wrap:wrap;
background:#faf9f9;
padding:2rem;
`
export const CardProduct= styled.div`
width:455px;
height:350px;
display:flex;
flex-direction:row;
align-items:center;
background:red;
`
export const CardImage=styled.img`
height:100%;
width:175px;
object-fit:cover;
object-position:center;
overflow:hidden;
transition:all 0.2s ease-in-out;


`

export const CardBody=styled.div`
height:100%;
width:100%;
display:grid;
text-align:center;
align-content:center;
`
export const CardTitle= styled.h5`
color:#0a0a0a;
text-transform:capitalize;
margin-left:3px;
`

export const CardPrice= styled.h6`
color:#c1b1b1;
margin-right:3px;
`
export const ProductLink= styled(Link)`
color:#fafafa;
&:hover{
    text-decoration:none;
    color:#fff;
}
`