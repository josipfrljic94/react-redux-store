import * as constants from  "../constants";
import data from "../data"
export const getProducts=()=>(dispatch)=>{
    dispatch({
        type:constants.GET_PRODUCTS,
        payload:data
    })
} 

export const getProduct=(id)=>async(dispatch,getState)=>{


const products= await getState().products.products.slice();
console.log("id je",id)
let product= await products.find(p=>p.id.toString()===id.toString());
console.log(products,"tu su")
console.log(product,"ovo je ..")
dispatch({
    type:constants.GET_PRODUCT,
    payload:{product}
})
}
