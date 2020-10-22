import React from 'react'

import{Col,Row,Container,Image} from "react-bootstrap";

const Feature = ({img,text,img2,img3}) => {
    return (
       
            <Container fluid className="m-0 p-0 pb-5 " >
            <Row className=" p-0 m-0 " >
            <Col lg={6} className="text-center p-1  m-0  w-100 feature-first" >
              
                <Image src={img} fluid thumbnail className="p-0 m-0 w-100 h-100"  />
               
            
            </Col>
            <Col lg={6}className="text-center   mb-0 p-0 m-0 w-100 feature-second">
            <div className="w-100  h-50 featured-text m-0 p-0 pl-4  "md={6} style={{display:"grid", alignItems:"center", justifyContent:"left"}}>
                <h3 className="text-left mb-3 text-capitalize ">Clothing</h3>
            <h1  className="text-left mb-3 text-wrap text-uppercase">{text}</h1>
            </div>
            <div  className="w-50  h-50" >
                 <Image src={img2}   thumbnail className="p-0  m-0 h-100 w-100" />
            </div>
            <div className="w-50  h-50 " >
            <Image src={img3}  thumbnail className="p-0  m-0 h-100 w-100" />
            </div>
            </Col>
            </Row>
            </Container>
       
    )
}

export default Feature
