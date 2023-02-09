import { Container } from "@mui/system";
import styled from "styled-components";

const LoginPageWrap = styled(Container)`
  background-color: lightblue;
  height: 100vh;
  .MuiBox-root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: #fff;

    input{
      width: 400px;
      height 50px;
    }

  }
`
export {LoginPageWrap};