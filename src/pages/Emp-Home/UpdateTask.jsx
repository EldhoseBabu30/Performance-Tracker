import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function UpdateTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [performance, setPerformance] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('Emp-token');

  const createTeam = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8001/empapi/taskchart/${id}/taskupdates_add/`,
        {
          name,
          members
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 201) {
        

        Swal.fire({
          icon: 'success',
          title: 'Updated Successful',
          text: 'You have successfully Updated.',
        }).then(() => {
          navigate('/tl-home');
        });
      } else {
        setErrorMessage('Creation failed');
      }
    } catch (error) {
      console.error('Creation error:', error);
      setErrorMessage(error.message || 'Creation failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    await createTeam();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Update Task</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-900">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setMembers(e.target.value.split(','))}
              type="text"
              required
              className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-900">
              Performance Level
            </label>
            <input
              value={performance}
              onChange={(e) => setPerformance(e.target.value)}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
