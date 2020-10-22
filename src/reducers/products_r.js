
import * as constants from  "../constants";
const initialState={
    products:[],
    loading:true,
}
export const products=(state=initialState,action)=>{
    const{type,payload}=action;
    switch (type) {
        case constants.GET_PRODUCTS:
            return {...state,
                products:payload,
                loading:false,
            };
                
            
    
        default:
            return state;
    }
}