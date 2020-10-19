import styled from "styled-components";


export const JumbotronContainer= styled.div`
width:100%;
height:60vh;
position:relative;
`
export const JumbotronBg= styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

`
export const JumboVideo= styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`
export const JumbotronContent=styled.div`
z-index:3;
max-width:80%;
position:absolute;
display:flex;
flex-direction:column;
 align-items:center; 
justify-content:center; 
`
export const JumbotronH1=styled.h1`
text-transform:capitalize;
/* color:${({darktext})=>(darktext ? "#0c0e0e" : "#fafafa")}; */

-webkit-text-fill-color:#00000032;
-webkit-text-stroke-width:0.5px;
-webkit-text-stroke-color:#3f3f3f;
font-weight:800;
font-size:5.5rem;
text-align:left;
padding:0;
margin:0;
@media screen and (max-width:980px){
font-size:4rem;
}
@media screen and (max-width:768px){
 font-size:3.5rem;}
@media screen and (max-width:480px){
font-size:2.5rem;  }
`


export const JumbotronH3= styled.h3`
text-align:left;
width:100%;
color:${({darktext})=>(darktext ? "#0c0e0e" : "#fafafa")};
font-size:2.5rem;
@media screen and (max-width:980px){
font-size:2rem;
}
@media screen and (max-width:780px){
font-size:1.8rem;
}
@media screen and (max-width:460px){
font-size:1.5rem;
}
`