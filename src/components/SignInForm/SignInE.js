import styled from "styled-components";
import {Form } from "react-bootstrap";
import {Link} from "react-router-dom";

export const FormContainer= styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:top;
`

export const Forma = styled(Form)`
width:60%;
`

export const SignInLink= styled(Link)`
text-align:center;
color:grey;
text-decoration:none;
margin-left:5px;

&:hover{
    text-decoration:none;
    color:#0055ff;
}
`