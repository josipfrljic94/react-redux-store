import styled from "styled-components";
import {Link} from "react-router-dom";


export const CardContainer=styled.div`
width:100%;
min-height:100vh;
display:flex;

justify-content:center;
justify-items:left;
align-items:top;
gap:5px;
flex-wrap:wrap;
background:#faf9f9;
padding:2rem;
`
export const CardProduct= styled.div`
width:300px;
height:455px;
display:flex;
flex-direction:column;
align-items:center;
background:#fff;
`
export const CardImage=styled.img`
height:390px;
width:100%;
object-fit:cover;
object-position:center;
overflow:hidden;
transition:all 0.2s ease-in-out;


`

export const CardBody=styled.div`
height:65px;
width:100%;
display:flex;
justify-content:center;
justify-content:space-between;
align-items:center;
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

&:hover{
    text-decoration:none;
}
`