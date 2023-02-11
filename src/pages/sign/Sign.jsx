import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { SignUpPageWrap } from "./SignStyle";
import { useInput } from "../../hooks/useInput";
import { signUpAxios } from "../../api/apiSignUp";

const Sign = () => {
    const [emailValue, emailHandleChange, validatedEmail] = useInput("");
    const [passWordValue, passWordHandleChange, validatedPassWord] = useInput("");
    const isButtonAbled = validatedEmail && validatedPassWord;
    const navigate = useNavigate();

    const SignUp = async () => {
        const {status} = await signUpAxios({
            email: emailValue.inputValue,
            password: passWordValue.inputValue,
        });
        
        if (status === 201) {
            navigate("/signin");
        }
    };

    return (
        <SignUpPageWrap>
            <form>
                <Box>
                    <Typography>Sign up</Typography>
                    <TextField
                        id="email"
                        value={emailValue.inputValue}
                        onChange={emailHandleChange}
                        margin="normal"
                        type={"email"}
                        placeholder="이메일을 입력해주세요"
                        data-testid="email-input"
                    />
                    <TextField
                        id="password"
                        value={passWordValue.inputValue}
                        onChange={passWordHandleChange}
                        type={"text"}
                        placeholder="비밀번호를 입력해주세요"
                        data-testid="password-input"
                    />
                    <Button
                        onClick={SignUp}
                        disabled={!isButtonAbled}
                        variant="contained"
                        data-testid="signup-button"
                    >
                        회원가입
                    </Button>
                </Box>
            </form>
        </SignUpPageWrap>
    );
};

export default Sign;
