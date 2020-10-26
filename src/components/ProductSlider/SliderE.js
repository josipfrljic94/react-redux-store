import styled from "styled-components";

export const SliderContainer= styled.div`
width:100%;
max-height:600px;
min-height:400px;
padding-top:5%;
`
export const CardContainer= styled.div`
padding: 0 5%;
height:360px;
@media screen and (max-width:768px){
    height:380px;
    padding:0 2px;
@media screen and (max-width:460px){
    height:340px;
    padding:0 2px;
}
}
`