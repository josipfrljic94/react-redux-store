import React,{useState} from 'react'
import SigninForm from '../components/SignInForm'
import {connect} from "react-redux";
import {signinA,signOutA} from "../actions/auth";
import SignOut from '../components/SignOut';

const SignIn = ({users,signinA,isSignin,signOutA}) => {

    const [user, setuser] = useState({email:"",password:""});
    const [error, seterror] = useState(false)
    const [error2, seterror2] = useState(false)
//    const [isSignin, setisSignin] = useState(signin)
 
    // GET DATA FOR USER
    const getUser=(e)=>{
        const value=e.target.value;
        const name= e.target.name;    
        setuser({...user,[name]:value})
    };

    // SIGN IN ACTION
    const signInAction= async(e)=>{
        e.preventDefault(); 
        console.log(user)
       const copyUsers= await users.slice();
      let loggedUser= await copyUsers.find(u=>u.email===user.email)
    //   CHECK IS USER  EXIST
      if(loggedUser){
          console.log(loggedUser.password,"a ovo je user",user.password)
        //   CHECK PASSWORD IS CORRECT
          if(loggedUser.password===user.password){
              signinA()
              console.log("user is loggedIn")
          }
          else{seterror2(true)}
      }
      else{
          seterror(true)
      }
        }
    
    const signOutUser=(e)=>{
        e.preventDefault();
       
            signOutA()
            console.log("is logged in")
     
      
      
    }

   
    return (
        <div>
            {!isSignin ?   <SigninForm getUser={getUser} signInAction={signInAction} error={error} error2={error2}/>:
              <SignOut signOutUser={signOutUser}signOutA={signOutA} isSignin={isSignin}/> }
      
       
        </div>
    )
}
const mapStateToProps=(state)=>({
    users: state.authR.users,
  isSignin: state.authR.signin
})

export default connect(mapStateToProps,{signinA,signOutA})(SignIn) 
