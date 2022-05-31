import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import App from './App';
import LoginForm from './components/login/loginForm';
import RegisterForm from './components/register/registerForm';
import { auth } from './components/firebase';

const Routing = () => {

  console.log(auth.currentUser)

  return (
    <div className="App">
      <Routes>
        {auth.currentUser != null && <Route path="/" element={<App />} />}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default Routing;