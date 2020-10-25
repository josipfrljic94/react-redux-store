import React from 'react';
import { Carousel } from 'react-bootstrap';

import {CarouselImg,Title,Desc} from "./CarouselE";

const HomeCarousel = ({img1,img2,img3,title1,title2,title3,darkCol}) => {
    return (
        <Carousel >
        <Carousel.Item interval={1000} >
          <CarouselImg
            className="d-block w-100 "
          
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption >
          <Title darkcol={darkCol}>{title1}</Title>
            <Desc darkcol={darkCol}>Nulla vitae elit libero, a pharetra augue mollis interdum.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} >
          <CarouselImg
            className="d-block w-100 "
           
            src={img2}
            alt="Third slide"
          />
          <Carousel.Caption >
          <Title darkcol={darkCol}>{title2 }</Title>
            <Desc darkcol={darkCol}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <CarouselImg
            className="d-block w-100 "
          
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption >
            <Title darkcol={darkCol}>{title3}</Title>
            <Desc darkcol={darkCol}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</Desc>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default HomeCarousel
