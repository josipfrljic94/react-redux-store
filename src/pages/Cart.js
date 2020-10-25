import React from 'react'
import { connect } from 'react-redux'

import CartProducts from '../components/CartP';

const Cart = ({addToCart,removeFromCart,cartProducts}) => {


    return (
        <div>
          {!cartProducts ? <h1>Loading</h1> : 
          <CartProducts />}
        </div>     
          
    )
          }
const mapStateToProps=(state)=>({
  cartProducts: state.cart.cartProducts
})

export default connect(mapStateToProps,{})(Cart)
