import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Header/Navbar";
import HrHome from "./pages/Hr-Home/HrHome";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import TeamLeadHome from "./pages/TL-Home/TeamLeadHome";
import EmployeeHome from "./pages/Emp-Home/EmployeeHome";
import HrProfile from "./pages/Hr-Profile/HrProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/hr-home" element={<HrHome />} />
          <Route path="/tl-home" element={<TeamLeadHome />} />
          <Route path="/emp-home" element={<EmployeeHome />} />
          <Route path="/hr-profile" element={<HrProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
