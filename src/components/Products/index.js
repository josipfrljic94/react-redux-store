import React from 'react';

import {CardProduct,CardContainer,CardImage,CardBody,CardTitle,CardPrice,ProductLink} from "./ProductsE";
const Products = ({products}) => {
    return (
    <CardContainer>
        {products.map(p=>{
            return(
                
                <CardProduct key={p.id}>
                <ProductLink to={`/product/${p.id}`}>
                <CardImage src={p.img}></CardImage>
                <CardBody>
                <CardTitle>{p.title} </CardTitle>
                <CardPrice>{p.price}$</CardPrice>
                </CardBody>
                </ProductLink>
            </CardProduct>
            )
        })}
        
    </CardContainer>
    )
}

export default Products
