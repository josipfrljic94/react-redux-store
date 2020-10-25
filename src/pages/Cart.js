import React from 'react'
import { connect } from 'react-redux'
import {addToCart,removeFromCart} from "../actions/cart";
import CartProducts from '../components/CartP';

const Cart = ({addToCart,removeFromCart,cartProducts}) => {


    return (
        <div>
          {!cartProducts ? <h1>Loading</h1> : 
          <CartProducts cartProducts={cartProducts} addToCart={addToCart}removeFromCart={removeFromCart}/>}
        </div>     
          
    )
          }
const mapStateToProps=(state)=>({
  cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps,{addToCart,removeFromCart})(Cart)
