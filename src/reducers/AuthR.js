
import * as constants from  "../constants";
const initialState={
users: JSON.parse(localStorage.getItem("users") || "[]"),
signin:false
}


export const authR=(state=initialState,action)=>{
    const {type,payload}=action;
    switch (type) {
      
        case constants.REGISTRING_USER:
              return { users:payload.users,signin:false };

         case constants.SIGNIN_USER:
             return {
                users:state.users,
                 signin:true
              
            };
        case constants.SIGNOUT_USER:
            return{
                users:state.users,
              signin:false
            };
    
        default:
           return state
    }
}