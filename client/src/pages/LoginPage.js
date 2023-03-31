import React from "react";
import Navbar from "../components/navigation/Navbar";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import HeaderSection from "../components/sections/HeaderSection"

import heroImage from "../images/prom-5.jpg";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }
    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((signed) => {
        if (signed.length <= 0) {
          alert("Username or password is incorrect");
          return;
        }
        dispatch(loggedIn({ user: signed.data.user, token: signed.data.token, exp: signed.exp }));
        navigate("/admin");
      });
  };

  return (
    <div>
      <Navbar />
      <HeaderSection title="Denny's Only" />
      <div className="section" style={{ minHeight: "52.2vh" }}>
        <div className="container">
          <div className="container-group">
            <img src={heroImage} className="arch-image" style={{alignSelf: "center"}}/>
          </div>
          <div className="container-group">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <p>Login below with username and password.</p>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button type="submit" className="button-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="section" />
      <Footer />
    </div>
  );
};

export default LoginPage;
