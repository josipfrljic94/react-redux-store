import React,{useState} from 'react';
import MyForm from '../components/Form';
import Title from '../components/title';
import { logintitle } from '../components/title/data';
import {connect} from "react-redux";
import {registerA} from "../actions/auth";

const Register = ({registerA,users}) => {

    const getUser=(e)=>{
        const value=e.target.value;
        const name= e.target.name;    
        setuser({...user,[name]:value})
    
    }

    const [user, setuser] = useState({username:"",email:"",password:""})

   
   
    
    const [error, seterror] = useState(false)
    const [error2, seterror2] = useState(false)
  

    const registring=(e)=>{
        e.preventDefault(); 
        const copyUsers=users.slice()
        if(copyUsers.some(u=>u.username===user.username)){
            seterror(true)
        }
        if( copyUsers.some(u=>u.email===user.email)){
            seterror2(true)
            
        }
         if(!copyUsers.some(u=>u.email===user.email||u.username===user.username)){
            registerA(user) 
            
            seterror(false)
          seterror2(false)
        
        }
            
    
      
    }
    
    return (
       
       <div>
           <Title {...logintitle}/>
           <MyForm getUser={getUser} registring={registring} error={error} error2={error2}/>
       </div>
    )
}
const mapStateToProps=(state)=>({
    users: state.authR.users,
  
})

export default connect(mapStateToProps,{registerA})(Register) 
