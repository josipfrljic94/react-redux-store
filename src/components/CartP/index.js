import React from 'react'
import {CardProduct,CardContainer,CardImage,CardBody,CardTitle,CardPrice,ProductLink} from "./CartE";
import {Button} from "react-bootstrap";
const CartProducts = ({cartProducts,addToCart,removeFromCart}) => {
    const addInCart=(e,product)=>{
        e.preventDefault();
        addToCart(product)
    }
    const deleteProduct=(e,product)=>{
        e.preventDefault();
        removeFromCart(product)
    }
    return (
       
        <CardContainer>
        {cartProducts.map(p=>{
            return(
                
                <CardProduct key={p.id}>
                <ProductLink to={`/product/${p.id}`}>
                <CardImage src={p.img}></CardImage>
                <CardBody>
                <CardTitle>{p.cart} </CardTitle>
                <div>
                    
                    <Button variant="dark" className="rounded-0 mr-1" onClick={(e)=>addInCart(e,p)}>ADD</Button>
                    <Button variant="dark" className="rounded-0 ml-1" onClick={(e)=>deleteProduct(e,p)}>REMOVE</Button>
                </div>
                <CardPrice>{p.cart*p.price}$</CardPrice>
                </CardBody>
                </ProductLink>
            </CardProduct>
            )
        })}
        
    </CardContainer>
    
    )
}

export default CartProducts
