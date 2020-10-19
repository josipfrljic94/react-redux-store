import React from 'react'

import{Col,Row,Container,Image} from "react-bootstrap";

const Feature = ({img,text,img2,img3}) => {
    return (
       
            <Container fluid className={`m-0 p-0 `}>
            <Row className="p-0 m-0" style={{minHeight:"100vh"}}>
            <Col lg={6}className="text-center bg-danger p-0 m-0">
            <Image src={img} fluid thumbnail className="p-0"/>
            </Col>
            <Col lg={6}className="text-center  ml-0 mr-0 pl-0 pr-0" style={{display:"flex",flexWrap:"wrap"}}>
            <div className="w-100 featured-text pl-4 h-50" style={{display:"grid", alignContent:"center", justifyContent:"left"}}>
                <h3 className="text-left mb-3 text-capitalize">Clothing</h3>
            <h1  className="text-left mb-3 text-wrap text-uppercase">{text}</h1>
            </div>
            <div  className="w-50 h-50 feature-images">
                 <Image src={img2} fluid thumbnail className="p-0" />
            </div>
            <div className="w-50 h-50 feature-images">
            <Image src={img3} fluid thumbnail className="p-0"/>
            </div>
            </Col>
            </Row>
            </Container>
       
    )
}

export default Feature
