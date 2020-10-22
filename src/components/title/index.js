import React from 'react'
import {TitleContainer,TitleContent} from "./titleE";
const Title = ({width,text,darktext}) => {
    return (
        <TitleContainer  width={width}>
           <TitleContent darktext={darktext}>{text}</TitleContent> 
        </TitleContainer>
    )
}

export default Title
