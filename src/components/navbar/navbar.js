import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1 ,
                        textAlign: "left"
                    }}>
                        todo app   
                </Typography>
                    <Link to="/login" 
                    style={{
                        textDecoration: "none"
                    }}>
                        <Button color="inherit" 
                        sx={{
                            color: "black"
                            }}>
                                Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )  
}

export default Navbar