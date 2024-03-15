import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import HrHome from "./pages/Hr-Home/HrHome";
import HrRegisterPage from "./pages/Register/HrRegisterPage";
import TLRegisterPage from "./pages/Register/TLRegisterPage";
import HRLoginPage from "./pages/Login/HRLoginPage";
import TeamLeadHome from "./pages/TL-Home/TeamLeadHome";
import EmployeeHome from "./pages/Emp-Home/EmployeeHome";
import HrProfile from "./pages/Hr-Profile/HrProfile";
import TeamLeadProfile from "./pages/TL-Profile/TeamLeadProfile";
import EmpRegister from "./pages/Register/EmpRegister";
import ProjectRegister from "./pages/Register/ProjectRegister";
import HrProjectDetails from "./pages/Project/HrProjectDetails";
import TLProjectDetails from "./pages/Project/TLProjectDetails";
import ProjectStatusReport from "./pages/TL-Home/EmployeeAssign";
import Login from "./pages/Login/Login";
import TLLoginPage from "./pages/Login/TLLoginPage";
import EmployeeLogin from "./pages/Login/EmployeeLogin";
import TeamCreation from "./pages/TL-Home/TeamCreation";
import ViewEmployees from "./pages/TL-Home/ViewEmployees";
import ViewTeam from "./pages/TL-Home/ViewTeam";
import ViewTeams from "./pages/Hr-Home/ViewTeams";
import ProjectAssign from "./pages/TL-Home/ProjectAssign";
import AssignProjectEmployees from "./pages/TL-Home/AssignProjectEmployees";
import HrInbox from "./pages/Hr-Home/HrInbox";


const App = () => {
  const [projectData, setProjectData] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hr-login" element={<HRLoginPage />} />
          <Route path="/tl-login" element={<TLLoginPage />} />
          <Route path="/emp-login" element={<EmployeeLogin />} />

          <Route path="/hr-register" element={<HrRegisterPage />} />
          <Route path="/tl-register" element={<TLRegisterPage />} />
          <Route path="/hr-home" element={<HrHome />} />
          <Route path="/tl-home" element={<TeamLeadHome />} />
          <Route path="/emp-home" element={<EmployeeHome />} />
          <Route path="/hr-profile" element={<HrProfile />} />
          <Route path="/tl-profile" element={<TeamLeadProfile />} />
          <Route path="/emp-register" element={<EmpRegister />} />
          <Route
          path="/register-project"
          element={<ProjectRegister projectData={projectData} setProjectData={setProjectData} />}
        />
          <Route path="/hr-project-details" element={<HrProjectDetails />} />
          <Route path="/tl-project-details" element={<TLProjectDetails />} />
          <Route path="/emp-assign" element={<ProjectStatusReport />} />
          <Route path="/team-create" element={<TeamCreation />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/view-team" element={<ViewTeam />} />
          <Route path="/view-teams" element={<ViewTeams />} />
          <Route path="/project-assign" element={<ProjectAssign />} />
          <Route path="/tl-home/assign_to_emp/:id" element={<AssignProjectEmployees />} />
          <Route path="/hr-home/hr-inbox" element={<HrInbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
