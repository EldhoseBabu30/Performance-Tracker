import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import "./App.css";
import ProjectRegister from "./pages/Register/ProjectRegister";
import ProjectDetails from "./pages/Project/ProjectDetails";
import { ProjectDataProvider } from "./pages/Register/ProjectDataContext";
import { EmployeeDataProvider } from "./pages/Register/EmployeeDataContext";
import { TeamLeadDataProvider } from "./pages/Register/TeamLeadDataContext";
import ProjectStatusReport from "./pages/TL-Home/EmployeeAssign";
import { AuthProvider, useAuth } from "./components/Controllers/AuthContext";
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
  return (
    <div>
      <AuthProvider>
        <EmployeeDataProvider>
          <ProjectDataProvider>
            <TeamLeadDataProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/hr-login" element={<HRLoginPage />} />
                  <Route path="/tl-login" element={<TLLoginPage />} />
                  <Route path="/emp-login" element={<EmployeeLogin />} />

                  <Route path="/hr-register" element={<HrRegisterPage />} />
                  <Route path="/tl-register" element={<TLRegisterPage />} />
                  <Route
                    path="/hr-home"
                    element={<PrivateRoute component={<HrHome />} />}
                  />
                  <Route
                    path="/tl-home"
                    element={<PrivateRoute component={<TeamLeadHome />} />}
                  />
                  <Route
                    path="/emp-home"
                    element={<PrivateRoute component={<EmployeeHome />} />}
                  />
                  <Route
                    path="/hr-profile"
                    element={<PrivateRoute component={<HrProfile />} />}
                  />
                  <Route
                    path="/tl-profile"
                    element={<PrivateRoute component={<TeamLeadProfile />} />}
                  />
                  <Route
                    path="/emp-register"
                    element={<PrivateRoute component={<EmpRegister />} />}
                  />
                  <Route
                    path="/register-project"
                    element={<PrivateRoute component={<ProjectRegister />} />}
                  />
                  <Route
                    path="/project-details"
                    element={<PrivateRoute component={<ProjectDetails />} />}
                  />
                  <Route
                    path="/emp-assign"
                    element={
                      <PrivateRoute component={<ProjectStatusReport />} />
                    }
                  />
                  <Route
                    path="/team-create"
                    element={<PrivateRoute component={<TeamCreation />} />}
                  />
                  <Route
                    path="/view-employees"
                    element={<PrivateRoute component={<ViewEmployees />} />}
                  />

                  <Route
                    path="/view-team"
                    element={<PrivateRoute component={<ViewTeam />} />}
                  />
                  <Route
                    path="/view-teams"
                    element={<PrivateRoute component={<ViewTeams />} />}
                  />
                  <Route
                    path="/project-assign"
                    element={<PrivateRoute component={<ProjectAssign />} />}
                  />
                  <Route
                    path="/tl-home/assign_to_emp/:id"
                    element={<PrivateRoute component={<AssignProjectEmployees />} /> }
                  />
                  <Route
                    path="/hr-home/hr-inbox"
                    element={<PrivateRoute component={<HrInbox />} /> }
                  />
                </Routes>
              </BrowserRouter>
            </TeamLeadDataProvider>
          </ProjectDataProvider>
        </EmployeeDataProvider>
      </AuthProvider>
    </div>
  );
};

const PrivateRoute = ({ component }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return token ? component : null;
};

export default App;
