import axios from 'axios';
import React, { useEffect, useState } from 'react'




const EmpTeam = () => {
    const [empTeam, setEmpTeam] = useState([]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('Emp-token');
    console.log(empTeam);

    useEffect(() => {
        const fetchEmpTeam = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/empapi/teamview/', {
                    headers: {
                        'Authorization': `Token ${token}`,
                    }
                });
                setEmpTeam(response.data);
            } catch (error) {
                console.error("Failed to fetch project details:", error);
                setError(error.message || 'Failed to fetch data');
            }
        };

        fetchEmpTeam();

    }, []); 
  return (
    <div className="mt-8 h-96 overflow-y-auto">
    <h1 className="text-2xl font-semibold mb-4">Employees</h1>
    {empTeam.length > 0 ? (
   <div className="relative">
   <div className="overflow-x-auto">
     <table className="min-w-full bg-white rounded-md shadow-md">
       <thead className="bg-gray-200 sticky top-0">
         <tr>
           <th className="py-3 px-4 border-b border-gray-300">Id</th>
           <th className="py-3 px-4 border-b border-gray-300">Team Lead</th>
           <th className="py-3 px-4 border-b border-gray-300">Members</th>
           <th className="py-3 px-4 border-b border-gray-300">Team Name</th>
           <th className="py-3 px-4 border-b border-gray-300">Is Approved</th>
         </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
         {empTeam.map((team, index) => (
           <tr key={index}>
             <td className="py-3 px-4 border whitespace-nowrap">{team.id}</td>
             <td className="py-3 px-4 border whitespace-nowrap">{team.teamlead}</td>
             <td className="py-3 px-4 border whitespace-nowrap">{team.members.join(", ")}</td>
             <td className="py-3 px-4 border whitespace-nowrap">{team.name}</td>
             <td className="py-3 px-4 border whitespace-nowrap">{team.phoneno}</td>
             <td className="py-3 px-4 border whitespace-nowrap">{team.is_approved? 'Yes' : 'No'}</td>                
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 </div>
    ) : (
      <p className="mt-4">No Team found.</p>
    )}
  </div>
  
  )
}

export default EmpTeam
