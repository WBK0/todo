import { Container } from "@mui/system";
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import './style.css'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "../firebase";
const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logout = async () => {
        await signOut(auth);
      };

    onAuthStateChanged(auth, (currentUser) => {
        //setUser(currentUser);
        console.log("dss")
      });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    }

    return(
        <div 
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <form onSubmit={handleSubmit}>
                <Container maxWidth="xs"
                    sx={{
                        boxShadow: "3px 2px 6px 1px #969696",
                        webkitBoxShadow: "4px 3px 8px 1px #969696",
                        backgroundColor: "snow",
                        paddingTop: "1px",
                        paddingBottom: "80px",
                }}>
                    <h1 className="loginFormTitle">
                        Zaloguj się
                    </h1>
                    <p>
                        Email
                    </p>
                    <TextField 
                        id="outlined-basic" 
                        fullWidth 
                        variant="outlined"
                        onChange={
                            (e) => setEmail(e.target.value)
                        } 
                    />
                    <p>
                        Hasło
                    </p>
                    <TextField 
                        id="outlined-basic" 
                        fullWidth 
                        variant="outlined" 
                        type="password"
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                    />
                    <Button 
                        variant="contained"
                        fullWidth
                        type="submit"
                        sx={{
                            marginTop: "20px"
                        }}
                    >
                        Zaloguj się
                    </Button>
                    <Link 
                        to="/register"
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
                            Nie masz konta?
                        </p>
                    </Link>
                    <button onClick={logout}> Sign Out </button>
                </Container>            
            </form>
        </div>
    )
}

export default LoginForm;