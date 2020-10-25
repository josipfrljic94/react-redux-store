import React from 'react';
import {Button} from "react-bootstrap";

const SignOut = ({signOutUser}) => {
    return (
        <div>
            <Button type="submit" variant="dark" onClick={(e)=>signOutUser(e)}>Logout</Button>
        </div>
    )
}

export default SignOut
