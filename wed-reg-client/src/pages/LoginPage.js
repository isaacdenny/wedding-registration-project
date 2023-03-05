import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/auth/authSlice.js";
import { Navigate } from "react-router-dom"

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

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
      .then((data) => {
        console.log(data);
        if (data.length <= 0) {
          alert("Username or password is incorrect");
          return;
        }
        dispatch(loggedIn({ user: data.user, token: data.token }));
        Navigate({to: "/admin"});
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-section-container">
        <div className="form-container">
          <h1 className="form-title">If You Are Not A Denny, Turn Back Now</h1>
          Login below with username and password.
          <form onSubmit={handleLogin}>
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
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
