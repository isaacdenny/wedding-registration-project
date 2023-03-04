import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/auth/authSlice.js";

const LoginPage = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(loggedIn({ user: "isaac", token: "12345" }));
  }

  return (
    <>
      <Navbar />
      <div className="container">login</div>
      <button onClick={handleClick}>login</button>
      <Footer />
    </>
  );
};

export default LoginPage;
