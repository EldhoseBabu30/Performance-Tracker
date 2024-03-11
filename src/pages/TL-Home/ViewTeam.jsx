import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../../components/Controllers/AuthContext";


const ViewTeam = () => {
  const { token } = useAuth(); 
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8001/teamleadapi/team/', {
          headers: {
            'Authorization': `Token ${token}`, 
          }
        });
        console.log("Team data response:", response.data);
        setTeamData(response.data);
      } catch (error) {
        console.error("Failed to fetch team details:", error);
      }
    };

    fetchTeamDetails();
  }, []);

  return (
    <div className="mt-8 h-96 overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">My Team</h1>
      {teamData.length > 0 ? (
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead className="bg-gray-200 sticky top-0">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300">Id</th>
                  <th className="py-3 px-4 border-b border-gray-300">Team Lead Name</th>
                  <th className="py-3 px-4 border-b border-gray-300">Team Name</th>
                  <th className="py-3 px-4 border-b border-gray-300">Is Approved</th>
                  <th className="py-3 px-4 border-b border-gray-300">Members Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teamData.map((team, id) => (
                  <tr key={id}>
                    <td className="py-3 px-4 border whitespace-nowrap">{team.id}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{team.teamlead}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{team.name}</td>
                    <td className="py-3 px-4 border whitespace-nowrap">{team.is_approved ? 'Yes' : 'No'}</td>   
                    <td className="py-3 px-4 border whitespace-nowrap">{team.members}</td>             
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-4">No Teams.</p>
      )}
    </div>
  );
};

export default ViewTeam;
