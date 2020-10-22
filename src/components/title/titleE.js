import styled from "styled-components";

export const TitleContainer= styled.div`
width:${({width})=>(width)};

padding-top:50px;
min-height:100px;
display:grid;
align-items:center;
`
export const TitleContent= styled.h1`
font-size:3rem;
font-weight:700;
color:${({darktext})=>(darktext ? "#0a0a0a" : "#fafafa")};
text-align:center;
transform:translateY(-50%);

text-decoration: ${({dark})=>(dark ? "3px  underline #c2b1b1":  "3px underline #d5d5d6")};
@media screen and (max-width:768px){
    font-size:2rem;
   
}
@media screen and (max-width:460px){
    font-size:1.8rem;
}

`