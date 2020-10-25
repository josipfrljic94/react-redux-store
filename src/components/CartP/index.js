import React,{useState,useEffect} from 'react'
import {CardBody,CardTitle,CardPrice,ProductLink} from "./CartE";
import {Container,Row,Col,Image} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {addToCart,removeFromCart} from "../../actions/cart";
import {connect} from "react-redux";



const CartProducts = ({cartProducts,addToCart,removeFromCart,isSignin}) => {

const [summa, setSumma] = useState(0)  
    useEffect(() => {
       
       setSumma( cartProducts.reduce((a, c) => a + c.price * c.cart, 0))
        
    }, [cartProducts])


    const addInCart=(e,product)=>{
        e.preventDefault();
        addToCart(product)
   
       
    }
    const deleteProduct=(e,product)=>{
        e.preventDefault();
        removeFromCart(product)
   
    }
  
    return (
       
        <Container fluid="true" style={{width:"100%"}} >
            <Row>
            <Col md={8}  className="mt-2 mb-2 " style={{borderBottom:"1px solid darkgrey"}}>
        {cartProducts.map(p=>{
            return(
                
                <Row  key={p.id} lg={12} className="space-betweem" md={12}>
                    <Col md={4} xs={4}  className="d-flex align-items-center">
                        <Image src={p.img} style={{width:"120px",height:"auto"}}></Image>
                    </Col>
                    <Col md={8} xs={8} className=" d-flex justify-content-center" >             
                <CardBody  style={{height:"300px"}}>
                <CardTitle>{p.title} </CardTitle>
                <CardPrice>{p.price*p.cart } $</CardPrice>
                <CardTitle>Quantity {p.cart} </CardTitle>
                <Row className=" justify-content-center" >
                    
                    <Button variant="dark" className="rounded-0 mr-1" onClick={(e)=>addInCart(e,p)}>ADD</Button>
                    <Button variant="dark" className="rounded-0 ml-1" onClick={(e)=>deleteProduct(e,p)}>REMOVE</Button>
                </Row>
               
                </CardBody>
                </Col>
                
                </Row>
               
            )
        })}
        </Col>
        <Col md={4} className="d-flex flex-column align-content-center">
           <h3 style={{borderBottom:"1px solid darkgrey "}}>Summary</h3>
        <CardTitle>Total price: {summa} $ </CardTitle>
        
        <Button className="rounded-0 mr-3 ml-3" variant="dark"><ProductLink to={isSignin ? "/" : "/register"}>FINISH</ProductLink></Button>
        </Col>
        </Row>
    </Container>
    
    )
}
const mapStateToProps=(state)=>({
    cartProducts: state.cart.cartProducts,
    isSignin: state.authR.signin
})
export default connect(mapStateToProps,{addToCart,removeFromCart})(CartProducts)
