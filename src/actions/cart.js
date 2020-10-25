import * as constants from  "../constants";

export const addToCart=(product)=>(dispatch,getState)=>{
    const cartProducts = getState().cart.cartProducts.slice();
    let isInCart = false;
    cartProducts.forEach((p) => {
      if (p.id === product.id) {
        isInCart = true;
        p.cart++;
      }
    });
    if (!isInCart) {
        cartProducts.push({ ...product, cart: 1 });
    }
    dispatch({
      type: constants.ADDTO_CART,
      payload: {cartProducts }
    });
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  };

  export const removeFromCart=(product)=>(dispatch,getState)=>{
    let cartProducts= getState().cart.cartProducts.slice();
    if(product.cart>1)
    {product.cart--} 
    else{
        cartProducts=cartProducts.filter(p=>p.id!==product.id)
    }
   dispatch(
       {type:constants.REMOVEFROM_CART,
        payload:{cartProducts}})
   localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
}
  
