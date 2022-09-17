import React from 'react';
import { Button } from "@chakra-ui/react";


const AuthButtons:React.FC = () => {
    
    return (
        <>
            <Button ml={10} mr={4} height="36px">Log In</Button>
            <Button mr={5} height="36px">Sign Up</Button>
        </>
    );
}
export default AuthButtons;