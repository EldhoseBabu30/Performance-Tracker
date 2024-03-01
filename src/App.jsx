import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import HrHome from './pages/Hr-Home/HrHome';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import TeamLeadHome from './pages/TL-Home/TeamLeadHome';
import EmployeeHome from './pages/Emp-Home/EmployeeHome';
import HrProfile from './pages/Hr-Profile/HrProfile';
import TeamLeadProfile from './pages/TL-Profile/TeamLeadProfile';
import EmpRegister from './pages/Register/EmpRegister';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/hr-home" element={<HrHome />} />
          <Route path="/tl-home" element={<TeamLeadHome />} />
          <Route path="/emp-home" element={<EmployeeHome />} />
          <Route path="/hr-profile" element={<HrProfile />} />
          <Route path="/tl-profile" element={<TeamLeadProfile />} />
          <Route path="/emp-register" element={<EmpRegister />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
