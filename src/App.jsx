import React from 'react';
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
import { TeamLeadDataProvider } from './pages/Register/TeamLeadDataContext';
import ProjectStatusReport from './pages/TL-Home/EmployeeAssign';
import { AuthProvider } from './components/Controllers/AuthContext';

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
                  <Route
                    path="/"
                    element={<LoginPage />}
                  />
                  <Route
                    path="/register"
                    element={<RegisterPage />}
                  />
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
                    element={<PrivateRoute component={<ProjectStatusReport />} />}
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
      navigate('/');
    }
  }, [token, navigate]);

  return token ? component : null;
};

export default App;
