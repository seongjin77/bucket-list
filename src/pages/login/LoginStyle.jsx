import { Container } from "@mui/system";
import styled from "styled-components";

const LoginPageWrap = styled(Container)`
    background-color: lightblue;
    height: 100vh;
    overflow: hidden;
    form {
        margin-top: 200px;
    }
    .MuiBox-root {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
            background-color: #fff;
            border-radius: 5px;
        }
        .MuiTypography-root {
            padding: 5px;
            &.validationTxt {
                font-size: 12px;
                color: #9e9e9e;
            }
        }
        .MuiButtonBase-root {
            width: 83px;
            margin-top: 10px;
        }
    }
`;


export { LoginPageWrap };
