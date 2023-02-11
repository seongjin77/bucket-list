import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    a{
        text-decoration : none;
        color : inherit;
    }
    ol, ul,li {
    list-style: none;
}
    button{
        border : none;
        cursor : pointer;
    }

    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
