import { Box } from "@mui/system";
import React from "react";
import { LoginPageWrap } from "./LoginStyle";

const Login = () => {
    return (
        <LoginPageWrap>
            <form>
                <Box>
                  <input type={'email'} required />  
                  <input type={'password'} required/>  
                </Box>
            </form>
        </LoginPageWrap>
    );
};

export default Login;
