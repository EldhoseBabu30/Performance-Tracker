// src/components/ProjectStatusReport.js
import React from 'react';
import Spreadsheet from 'react-spreadsheet';

const ProjectStatusReport = () => {
  // Initial data for the spreadsheet
  const initialData = [
    [{ value: 'Task', readOnly: true }, { value: 'Status', readOnly: true }],
    ['Task 1', 'In Progress'],
    ['Task 2', 'Completed'],
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <Spreadsheet
        data={initialData}
        onChange={(data) => console.log(data)}
      />
    </div>
  );
};

export default ProjectStatusReport;
