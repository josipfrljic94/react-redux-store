import React,{useEffect,useState,useCallback} from 'react'
import {Container,Row,Col,Image,Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProducts,getProduct} from "../actions/productsA";
import {addToCart} from "../actions/cart";
import {Link} from "react-router-dom";

const ProductItem = ({getProducts,getProduct,product,addToCart}) => {

    const getAllProducts = useCallback(() => {
       getProducts();
     
   }, [getProducts])


  let {hash}=useParams();
  
   
    const [theproduct, setTheProduct] = useState()

   useEffect(() => {
    getAllProducts()
   }, [getAllProducts]);

   useEffect(() => {
    getProduct(hash)
    setTheProduct(product)
   
   }, [getProduct,product,hash])
       
   

const addInCart=(e)=>{
    e.preventDefault();
    addToCart(theproduct)
}
   
    
    return (
       <Container fluid className="m-0 p-0">
           {!theproduct ? <h1>Loading</h1>: 
            <Row fluid="true" className="m-0 p-0">
               <Col md={6} className=" p-0 m-1" style={{height:"105vh"}}>
                    <Image src={theproduct.img} fluid="true" thumbnail className="h-100 w-100 p-0 m-0 border-0" style={{objectFit:"contain"}}/>
               </Col>
               <Col md={5}className=" p-5  m-0 text-center text-capitalize" style={{height:"85vh",display:"flex",flexDirection:"column",alignContent:"center",justifyitems:"center",justifyContent:"space-around"}}>
                <h3>{theproduct.title}</h3>
                
                <h5>{theproduct.designType}</h5>
                <h5>{theproduct.gender}</h5>
                  <h5>{theproduct.price} $</h5>
                 
                  
                  
                  <Button variant="dark" className="rounded-0" onClick={(e)=>addInCart(e)}>ADD TO CART</Button>
                  <Button variant="dark" className="rounded-0 mt-4" ><Link style={{color:"#fafafa"}} to="/cart">GO TO CART</Link></Button>

                  <h3>Description</h3>
                  <p >{theproduct.descripton}</p> 
                    
               </Col>
           </Row> 
        }
       </Container>
    )
}
const mapStateToProps=(state)=>({
    product:state.productR.product
})
export default connect(mapStateToProps,{getProduct,getProducts,addToCart})(ProductItem)
