import { Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBar from "./headerStyle";

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  const login = () => {
    navigate('/signin')
  }

    return (
        <HeaderBar>
            <Toolbar>
                <Typography variant="h3" component="h1">
                    Todo-list
                </Typography>
                {pathname === '/signin' || pathname === '/signup' ? null : <Button onClick={login} color="inherit">login</Button>
                }
            </Toolbar>
        </HeaderBar>
    );
};

export default Header;
