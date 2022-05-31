import { Container } from "@mui/system";
import React from "react";
import TextField from '@mui/material/TextField';
import './style.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return(
        <div 
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <Container maxWidth="xs"
                sx={{
                    boxShadow: "3px 2px 6px 1px #969696",
                    webkitBoxShadow: "4px 3px 8px 1px #969696",
                    backgroundColor: "snow",
                    paddingTop: "1px",
                    paddingBottom: "80px",
            }}>
                <h1 className="loginFormTitle">
                    Zarejestruj sie
                </h1>
                <p>
                    Imię
                </p>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    variant="outlined" 
                />
                <p>
                    Email
                </p>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    variant="outlined" 
                />
                <p>
                    Hasło
                </p>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    variant="outlined" 
                />
                <p>
                    Potwierdź hasło
                </p>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    variant="outlined" 
                />
                <Button 
                    variant="contained"
                    fullWidth
                    sx={{
                        marginTop: "20px"
                    }}
                >
                    Zarejestruj się
                </Button>
                <Link 
                    to="/login"
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold"
                    }}
                >
                    <p 
                        style={{
                            textAlign: "center",
                            
                        }}
                    >
                        Masz już konto?
                    </p>
                </Link>
            </Container>
        </div>
    )
}

export default RegisterForm;