import { Container } from "@mui/system";
import React, {useRef, useState} from "react";
import TextField from '@mui/material/TextField';
import './style.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";


const RegisterForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault()
    }

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
                <form onSubmit={handleSubmit}>
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
                    ref={emailRef} 
                />
                <p>
                    Hasło
                </p>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    variant="outlined" 
                    ref={passwordRef}
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
                    type="submit"
                    sx={{
                        marginTop: "20px"
                    }}
                >
                    Zarejestruj się
                </Button>
                </form> 
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