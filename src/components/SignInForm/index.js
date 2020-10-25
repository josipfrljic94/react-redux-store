import React from 'react'
import {FormContainer,Forma,SignInLink} from "./SignInE";
import {Form,Button} from "react-bootstrap";

const SigninForm = ({getUser,error,error2,signInAction}) => {
    
    
    return (
        <FormContainer> 
     <Forma>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email"  onChange={(e)=>getUser(e)} />
        {error ?  <Form.Text className="text-danger">
      User doesnt exist
        </Form.Text> : ""}
       
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"  onChange={(e)=>getUser(e)} />
        {error2 ?  <Form.Text className="text-danger">
     Wrong password
        </Form.Text> : ""}
    </Form.Group>
   
    <Button variant="dark" type="submit" onClick={(e)=>signInAction(e)}>
        Submit
    </Button>
    <SignInLink to="/register">Register</SignInLink>
    </Forma>
    </FormContainer>
    )
}

export default SigninForm
