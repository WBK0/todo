import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import App from './App';
import LoginForm from './components/login/loginForm';
import RegisterForm from './components/register/registerForm';

const Routing = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default Routing;