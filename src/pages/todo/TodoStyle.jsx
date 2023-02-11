import { Box, Container, styled } from "@mui/system";

const TodoWrap = styled(Container)`
  background-color: white;
  height: 100vh;
  &.MuiContainer-root{
    padding: 80px;
  }
`
export {TodoWrap}

const TodoBox = styled(Box)`
   background-color: skyblue;
   height: 70vh;

`
export {TodoBox}