import React from 'react';
import Slider from "react-slick";
import {Col,Row} from "react-bootstrap";

const UpperNav = () => {

    var settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       
            <Slider {...settings}>
             <Row className="justify-content-lg-center">
              <Col >
                <p className="text-center">Free refund </p>
              </Col>
              </Row>
            <Row className="justify-content-lg-center">
              <Col>
                <p className="text-center">Free shipping after 60$</p>
              </Col>
              </Row>
            <Row className="justify-content-lg-center"> 
              <Col>
                <p className="text-center">All right reserved</p>
              </Col>
              </Row>
            </Slider>
       
        )
    
}

export default UpperNav
