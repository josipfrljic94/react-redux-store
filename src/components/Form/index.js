import React from 'react'
import {FormContainer,Forma,SignInLink} from "./FormE";
import { Button,Form } from 'react-bootstrap';

const MyForm = ({getUser,registring,error,error2}) => {

   

    return (
        <FormContainer>
        <Forma>
        <Form.Group controlId="formBasicUserName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter username" name="username" onChange={(e)=>getUser(e)}/>
    {error ?  <Form.Text className="text-danger">
    User username allready exist
    </Form.Text> : "" }
   
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>getUser(e)}/>
    {error2 ? <Form.Text className="text-danger">
     User email allready exist
    </Form.Text> : ""  }
    
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" name="password" onChange={(e)=>getUser(e)}/>
   
  </Form.Group>
  <Button variant="dark" type="submit" onClick={(e)=>registring(e)}>
      Submit
  </Button>
  <SignInLink to="/login">Login</SignInLink>
        </Forma>
        </FormContainer>
    )
}

export default MyForm

