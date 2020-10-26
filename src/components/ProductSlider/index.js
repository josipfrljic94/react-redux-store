import React from 'react';
import Slider from "react-slick";
import {SliderContainer,CardContainer} from "./SliderE";
import {Card,Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductSlider = ({img,img1,img2,img3}) => {
    const settings = {
        dots: false,
        lazyLoad: true,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
              
            }
          },
          
          {
            breakpoint:600 ,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        
        ]
      };
    return (
        
            <SliderContainer >
            <Slider {...settings} style={{height:"80%",width:"80%",marginLeft:"10%"}}>
        <CardContainer >
        <Link to="/men" style={{height:"360px", width:"260px"}}>
         <Card className="h-100 bg-light">
          
          <Image fluid src={img}className="h-100" ></Image>
         
         </Card>
         </Link>
        </CardContainer>
        <CardContainer>
        <Link to="/women" style={{height:"360px", width:"260px"}}>
        <Card className="h-100 bg-light">
         
        <Image fluid src={img1}className="h-100"></Image>
        
         </Card>
         </Link>
        </CardContainer>
        <CardContainer >
        <Link to="/men" style={{height:"360px", width:"260px"}}>
        <Card className="h-100 bg-light">
         
        <Image fluid src={img2}className="h-100"></Image>
       
         </Card>
         </Link>
        </CardContainer>
        <CardContainer >
        <Link to="/women" style={{height:"360px", width:"260px"}}>
        <Card className="h-100 bg-light">
         
        <Image fluid src={img3} className="h-100 w-100"></Image>
        
         </Card>
         </Link>
        </CardContainer>
       
      </Slider>

            </SliderContainer>
       
    )
}

export default ProductSlider;
