import * as constants from  "../constants";

export const cart=(state={cartProducts:JSON.parse(localStorage.getItem("cartProducts")|| "[]")},action)=>{
    switch(action.type){
        case constants.ADDTO_CART:
            return {cartProducts:action.payload.cartProducts};
        case constants.REMOVEFROM_CART:
            return {cartProducts:action.payload.cartProducts};
            default:
                return state

        
    }
}