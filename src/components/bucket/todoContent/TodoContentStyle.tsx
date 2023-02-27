import { ListItem } from "@mui/material";
import styled from "styled-components";

const TodoLi = styled(ListItem)<{textdeco? : string}>`
    .MuiInputBase-root{
      width: 80%;
    }

    .MuiListItemText-root{
      text-decoration: ${(props) =>props.textdeco }
    }
    
  `
  
  
  
export {TodoLi}