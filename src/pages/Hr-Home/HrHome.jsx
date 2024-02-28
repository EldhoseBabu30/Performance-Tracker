import React from "react";

const HrHome = () => {
  const name = localStorage.getItem("userName");

  return (
    <div className="flex flex-col h-screen">
      {/* Welcome message */}
      <div className="flex justify-center items-center h-1/4 mt-2">
        <h3 className="text-3xl font-medium leading-tight text-center text-primary">
          Welcome, {name}
        </h3>
      </div>
      {/* Content */}
      <div className="flex justify-start items-start h-3/4">
        {/* Card */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Register Project
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021
              so far, in reverse chronological order.
            </p>
            <button
              type="button"
              className="mt-4 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrHome;
