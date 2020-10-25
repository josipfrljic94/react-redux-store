import * as constants from  "../constants";

export const registerA=(user)=> async (dispatch,getState)=>{
   const users= await getState().authR.users.slice()

users.push(user);
console.log(users)
  dispatch({
      type:constants.REGISTRING_USER,
      payload:{users}
  })
  localStorage.setItem("users", JSON.stringify(users));
   
}

export const signinA=()=>async (dispatch)=>{
   
    dispatch({
        type:constants.SIGNIN_USER,
        
    })
}

export const signOutA=()=>(dispatch)=>{
   
    dispatch({
        type:constants.SIGNOUT_USER,
       
    })
}