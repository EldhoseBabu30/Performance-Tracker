import React from 'react';
import Spreadsheet from 'react-spreadsheet';

const ProjectStatusReport = () => {
  // Initial data for the spreadsheet
  const initialData = [
    [{ value: 'At Risk', readOnly: true }, { value: 'Status', readOnly: true }, { value: ' Priority', readOnly: true }, { value: 'Deadline', readOnly: true }, { value: 'Task', readOnly: true }, { value: 'Description', readOnly: true }, { value: 'Assigned To', readOnly: true }, { value: 'Deliverable', readOnly: true }, { value: '% Done', readOnly: true }],
    [{ value: <input type="checkbox" />, readOnly: true }, 'Task 1', '', '', '', '', '', '', ''],
    [{ value: <input type="checkbox" />, readOnly: true }, 'Task 2', '', '', '', '', '', '', ''],
    // Add more rows as needed
  ];

  // Add more rows to make a total of 15 rows
  for (let i = 0; i < 13; i++) {
    initialData.push([{ value: <input type="checkbox" />, readOnly: true }, '', '', '', '', '', '', '', '']);
  }

  // Add the project name to the last row of the task row
  initialData[1][4] = { value: 'Project Name', readOnly: true, className: 'font-bold' }; // Assuming project name is set at the last row of task rows

  // Disable the entire 2nd row
  initialData[1] = initialData[1].map(cell => ({ ...cell, readOnly: true }));

  return (
    <div className="container mx-auto my-8">
      <div className="w-full max-w-screen-xl mx-auto">
        <Spreadsheet
          data={initialData}
          onChange={(data) => console.log(data)}
          columnLabels={false}
        />
      </div>
    </div>
  );
};

export default ProjectStatusReport;
