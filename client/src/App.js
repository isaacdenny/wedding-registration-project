import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HotelRecPage, AboutBridalPage, EventDetailsPage, AdminPage, OurStoryPage, LoginPage, LandingPage } from "./pages";
import "./App.css";
import { loggedOut } from "./features/auth/authSlice.js"

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.token != null);
  const isExpired = useSelector((state) => state.exp > Date.now());
  
  if (isExpired) {
    dispatch(loggedOut)
    isAuth = false
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<LoginPage />} />
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
