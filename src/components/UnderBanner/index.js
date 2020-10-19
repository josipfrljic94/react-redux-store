import React from 'react'
import {Col,Row} from "react-bootstrap";
const UnderBanner = () => {
    return (
        <Row fluid md={12} className="p-0 m-0 pt-4 pb-4" style={{background:"#f5f8f5"}}>
            <Col md={12}><h4 className="text-center text-capitalize p-0 m-0 pt-2 pb-2">Free delivery after 300kn</h4></Col>
            <Col md={12}><h2 className="text-center text-capitalize p-0 m-0 pt-2 pb-2">Most quality materials</h2></Col>
        </Row>
    )
}

export default UnderBanner
