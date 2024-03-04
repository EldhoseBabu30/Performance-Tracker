// App.js (assuming projects data is managed here or passed from a parent component)
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
import ProjectRegister from './pages/Register/ProjectRegister';
import ProjectDetails from './pages/Project/ProjectDetails';
import { ProjectDataProvider } from './pages/Register/ProjectDataContext';
import { EmployeeDataProvider } from './pages/Register/EmployeeDataContext';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 
  const projects = []; 

  return (
    <div>
       <EmployeeDataProvider>
      <ProjectDataProvider>
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
          <Route path="/register-project" element={<ProjectRegister />} />
          
          <Route path="/project-details" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </BrowserRouter>
      </ProjectDataProvider>
      </EmployeeDataProvider>
    </div>
  );
};

export default App;
