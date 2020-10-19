import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {JumbotronContainer,JumbotronBg,JumboVideo,JumbotronContent,JumbotronH1,JumbotronH3} from "./BannerE";
import video1 from "../../video/e-store-video1.mp4"

const Banner = () => {
    return (
       <JumbotronContainer >
        <Jumbotron background={video1} type="video/mp4">
            <JumbotronBg>
                <JumboVideo autoPlay={true} loop={true}  type="video/mp4" src={video1} />
            </JumbotronBg>
            <JumbotronContent>
                <JumbotronH1 darktext={true}>Clothes is part of you</JumbotronH1>
                <JumbotronH3 darktext={true}>Find your style, find yourself</JumbotronH3>
            </JumbotronContent>
        
        </Jumbotron>
            
        </JumbotronContainer>
    )
}

export default Banner;
