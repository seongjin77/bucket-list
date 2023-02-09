import { Container } from "@mui/system";
import styled from "styled-components";

const SignUpPageWrap = styled(Container)`
  background-color: lightblue;
  height: 100vh;
  overflow: hidden;
  form{
    margin-top: 200px;
  }
  .MuiBox-root{
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    input{
      background-color: #fff;
      border-radius:5px;
    }
    .MuiButtonBase-root{
      margin-top:20px;
    }
  }
`
export {SignUpPageWrap};