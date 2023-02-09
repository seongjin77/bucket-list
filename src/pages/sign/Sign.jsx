import React from 'react'
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { SignUpPageWrap } from './SignStyle';
import { useInput } from '../../hooks/useInput';
import { signUpAxios } from '../../api/apiAxios';


const Sign = () => {

  const [emailValue, emailHandleChange,validatedEmail] = useInput('');
  const [passWordValue, passWordHandleChange,validatedPassWord] = useInput('');
  const isButtonAbled = validatedEmail && validatedPassWord;

  const SignUp = () => {
    signUpAxios({email: emailValue, password:passWordValue})
  }

  console.log('새로고침')
  return (
    <SignUpPageWrap>
            <form>
                <Box>
                  <Typography>Sign up</Typography>
                  <TextField id='email' value={emailValue} onChange={emailHandleChange} margin="normal" type={"email"} placeholder='이메일을 입력해주세요' data-testid="email-input"/>
                  <TextField id='password' value={passWordValue} onChange={passWordHandleChange} type={"text"} placeholder='비밀번호를 입력해주세요' data-testid="password-input"/>
                  <Button onClick={SignUp} disabled={!isButtonAbled} variant='contained' data-testid="signup-button">회원가입</Button>
                </Box>
            </form>
        </SignUpPageWrap>
  )
}

export default Sign