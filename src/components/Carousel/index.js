import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../images/wbg1.jpg";
import img2 from "../../images/wbg2.jpg";
import img3 from "../../images/wbg3.jpg"
import {CarouselImg,Title,Desc} from "./CarouselE";

const HomeCarousel = () => {
    return (
        <Carousel >
        <Carousel.Item interval={1000} >
          <CarouselImg
            className="d-block w-100 "
          
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption >
            <Title>First slide label</Title>
            <Desc>Nulla vitae elit libero, a pharetra augue mollis interdum.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} >
          <CarouselImg
            className="d-block w-100 "
           
            src={img2}
            alt="Third slide"
          />
          <Carousel.Caption >
            <Title>Second slide label</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <CarouselImg
            className="d-block w-100 "
          
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption >
            <Title>Third slide label</Title>
            <Desc>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default HomeCarousel
