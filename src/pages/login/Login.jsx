import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { signInAxios } from "../../api/auth";
import { LoginPageWrap, ButtonFlexBox } from "./LoginStyle";
import { useInput } from "../../hooks/useInput";
import LoginForm from "../../components/loginForm/LoginForm";

const Login = () => {

    // 로그인 페이지의 추가적인 css 작업들
    // const navigate = useNavigate();
    // const [logInEmail, emailHandleChange, validatedEmail] = useInput("");
    // const [logInPassword, passwordHandleChange, validatedPassWord] =
    //     useInput("");
    // const isButtonAbled = validatedEmail && validatedPassWord;

    // const moveSignUp = () => {
    //     navigate("/signup");
    // };

    // const signIn = async () => {
    //     const { data } = await signInAxios({
    //         email: logInEmail.inputValue,
    //         password: logInPassword.inputValue,
    //     });
    //     localStorage.setItem("accessToken", data.access_token);
    //     navigate("/todo");
    // };

    return (
        <LoginPageWrap>
            {/* <form>
                <Box>
                    <Typography variant="h4" component="h2">
                        Login
                    </Typography>
                    <TextField
                        value={logInEmail.inputValue}
                        id="email"
                        type={"email"}
                        placeholder="이메일"
                        data-testid="email-input"
                        onChange={emailHandleChange}
                    />
                    <Typography className="validationTxt" component="span">
                        이메일 형식으로 적어주세요
                    </Typography>
                    <TextField
                        value={logInPassword.inputValue}
                        id="password"
                        type={"password"}
                        placeholder="비밀번호"
                        data-testid="password-input"
                        onChange={passwordHandleChange}
                    />
                    <Typography className="validationTxt" component="span">
                        비밀번호는 8자 이상입니다
                    </Typography>
                    <ButtonFlexBox>
                        <Button
                            disabled={!isButtonAbled}
                            variant="contained"
                            data-testid="signin-button"
                            onClick={signIn}
                        >
                            로그인
                        </Button>
                        <Button
                            variant="contained"
                            onClick={moveSignUp}
                            data-testid="signup-button"
                        >
                            회원가입
                        </Button>
                    </ButtonFlexBox>
                </Box>
            </form> */}
            <LoginForm/>
        </LoginPageWrap>
    );
};

export default Login;
