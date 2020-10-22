import styled from "styled-components";

export const CarouselImg= styled.img`
height:85vh;
object-fit:cover;
object-position:center;


`

export const Title= styled.h3`
color:${({darkcol})=>(darkcol ? "#0a0a0a" : "#fafafa" )};
font-size:2.5rem;
@media screen and (max-width:768px){
    font-size:2rem;
}
`

export const Desc= styled.p`
color:${({darkcol})=>(darkcol ? "#0a0a0a" : "#fafafa" )};
font-size:1.5rem;
@media screen and (max-width:768px){
    font-size:1.5rem;
}

`