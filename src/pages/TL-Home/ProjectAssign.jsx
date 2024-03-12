import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAuth } from '../../components/Controllers/AuthContext';

function ProjectAssign() {
  const [project, setProject] = useState('');
  const [teamlead, setTeamLead] = useState('');
  const [team, setTeam] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { token } = useAuth();

  const createTeam = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8001/teamleadapi/projects/23/project_assign/',
        {
          project,
          teamlead, 
          team
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Creation Successful",
          text: "You have successfully Created.",
        }).then(() => {
          navigate("/tl-home");
        });
      } else {
        setErrorMessage("Creation failed");
      }
    } catch (error) {
      console.error('Creation error:', error);
      setErrorMessage(error.message || 'Creation failed');
    }
  };

  const handleAssign = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    await createTeam();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Create a Team</h2>
        <form onSubmit={handleAssign} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
             Project
            </label>
            <input
              value={project}
              onChange={(e) => setProject(e.target.value)}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="phoneno" className="block text-sm font-medium text-gray-900">
              Team Lead
            </label>
            <input
              value={teamlead}
              onChange={(e) => setTeamLead(e.target.value)}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phoneno" className="block text-sm font-medium text-gray-900">
              Team 
            </label>
            <input
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectAssign;