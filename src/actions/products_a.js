import * as constants from  "../constants";
import data from "../data"
export const getProducts=()=>(dispatch)=>{
    dispatch({
        type:constants.GET_PRODUCTS,
        payload:data
    })
} 
