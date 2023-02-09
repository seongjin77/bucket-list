import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LoginPageWrap } from "./LoginStyle";

const Login = () => {
    return (
        <LoginPageWrap>
          
            <form>
                <Box>
                  <Typography>Login</Typography>
                  <TextField margin="normal" type={"email"} placeholder='이메일' data-testid="email-input"/>
                  <TextField type={"password"} placeholder='비밀번호' data-testid="password-input"/>
                  <Button>로그인</Button>
                  <Button>회원가입</Button>
                </Box>
            </form>
        </LoginPageWrap>
    );
};

export default Login;
