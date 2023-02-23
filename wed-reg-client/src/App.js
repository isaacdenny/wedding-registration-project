import LandingPage from "./pages/LandingPage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HotelRecPage from "./pages/HotelRecPage"
import AboutBridalPage from "./pages/AboutBridalPage"

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/hotel-rec"} element={<HotelRecPage />} />
            <Route path={"/about-bridal"} element={<AboutBridalPage />} />
            <Route
              path={"/admin"}
              element={isAuth ? <LandingPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
