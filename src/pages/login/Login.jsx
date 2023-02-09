import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginPageWrap } from "./LoginStyle";

const Login = () => {
    const navigate = useNavigate();

    const moveSignUp = () => {
        console.log("dd");
        navigate("/signup");
    };

    return (
        <LoginPageWrap>
            <form>
                <Box>
                    <Typography>Login</Typography>
                    <TextField
                        margin="normal"
                        type={"email"}
                        placeholder="이메일"
                        data-testid="email-input"
                    />
                    <TextField
                        type={"password"}
                        placeholder="비밀번호"
                        data-testid="password-input"
                    />
                    <Button variant="contained" data-testid="signin-button">
                        로그인
                    </Button>
                    <Button
                        variant="contained"
                        onClick={moveSignUp}
                        data-testid="signup-button"
                    >
                        회원가입
                    </Button>
                </Box>
            </form>
        </LoginPageWrap>
    );
};

export default Login;
