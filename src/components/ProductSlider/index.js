import React from 'react';
import Slider from "react-slick";
import {SliderContainer,CardContainer} from "./SliderE";
import {Card,Image} from "react-bootstrap";

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
              slidesToShow: 3,
              slidesToScroll: 1,
             
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        
            <SliderContainer>
            <Slider {...settings} style={{height:"90%",width:"90%",marginLeft:"5%",paddingTop:"100px"}}>
        <CardContainer >
         <Card className="h-100 bg-light">
          <Image fluid src={img}className="h-100" ></Image>
         </Card>
        </CardContainer>
        <CardContainer>
        <Card className="h-100 bg-light">
        <Image fluid src={img1}className="h-100"></Image>
         </Card>
        </CardContainer>
        <CardContainer >
        <Card className="h-100 bg-light">
        <Image fluid src={img2}className="h-100"></Image>
         </Card>
        </CardContainer>
        <CardContainer >
        <Card className="h-100 bg-light">
        <Image fluid src={img3} className="h-100"></Image>
         </Card>
        </CardContainer>
       
      </Slider>

            </SliderContainer>
       
    )
}

export default ProductSlider;
