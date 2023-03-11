import LandingPage from "./pages/LandingPage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HotelRecPage from "./pages/HotelRecPage";
import AboutBridalPage from "./pages/AboutBridalPage";
import EventDetailsPage from "./pages/EventDetailsPage.js";
import AdminPage from "./pages/AdminPage.js";
import "./App.css";
import OurStoryPage from "./pages/OurStoryPage.js"

function App() {
  const isAuth = useSelector((state) => state.token != null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/hotel-rec"} element={<HotelRecPage />} />
        <Route path={"/about-bridal"} element={<AboutBridalPage />} />
        <Route path={"/event-details"} element={<EventDetailsPage />} />
        <Route path={"/our-story"} element={<OurStoryPage />} />
        <Route
          path={"/admin"}
          //element={<AdminPage />}
          element={isAuth ? <AdminPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
