// HrInbox.js
import React, { useEffect, useState } from "react";

const HrInbox = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('hrRequests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleAccept = (projectId) => {
    console.log(`Request for project ${projectId} accepted`);
    const updatedRequests = requests.filter(request => request.projectId !== projectId);
    setRequests(updatedRequests);
    localStorage.setItem('hrRequests', JSON.stringify(updatedRequests));
  };
  
  const handleDecline = (projectId) => {
    console.log(`Request for project ${projectId} declined`);
    const updatedRequests = requests.filter(request => request.projectId !== projectId);
    setRequests(updatedRequests);
    localStorage.setItem('hrRequests', JSON.stringify(updatedRequests));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Inbox</h1>
      {requests.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Requests from Team Leads:</h2>
          <ul className="divide-y divide-gray-200">
            {requests.map((request, index) => (
              <li key={index} className="py-2 flex items-center justify-between">
                <div>
                  <span className="font-semibold">Project ID:</span> {request.projectId}, <span className="font-semibold">Project Name:</span> {request.projectName}{' '}
                  (Sent by: {request.teamLeadName})
                </div>
                <div>
                  <button onClick={() => handleAccept(request.projectId)} className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded">Accept</button>
                  <button onClick={() => handleDecline(request.projectId)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded">Decline</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No requests at the moment.</p>
      )}
    </div>
  );
};

export default HrInbox;
