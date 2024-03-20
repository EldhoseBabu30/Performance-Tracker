import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectOfTeams = () => {
  const [teamProjects, setTeamProjects] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ id: "" });
  const token = localStorage.getItem("Emp-token");

  useEffect(() => {
    const fetchTeamProjects = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8001/empapi/assignedprojects/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTeamProjects(response.data);
      } catch (error) {
        console.log("Error fetching team projects:", error);
        setError("Error fetching team projects");
      }
    };

    fetchTeamProjects();
  }, []);

  const handleCreateButtonClick = (projectId) => {
    setFormData({ id: projectId });
    handleCreate(); 
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8001/empapi/projectdetail/${formData.id}/taskchart_add/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
      
        }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error creating project task:", error);
    }
  };

 


console.log(formData.id);



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mt-8 max-w-lg w-full overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4 text-center">Projects</h1>
        <div className="grid gap-6">
          {teamProjects.length > 0 ? (
            teamProjects.map((project, index) => (
              <Card
                key={index}
                className="w-full border-4 border-gray-300 rounded-lg shadow-xl"
              >
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Project of Team
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Project Id:</span>{" "}
                    {project.id}
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Team Lead:</span>{" "}
                    {project.teamlead}
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Project:</span>{" "}
                    {project.project}
                  </Typography>
                  <Typography>
                    <span className="font-semibold">Team:</span> {project.team}
                  </Typography>
                </CardBody>
                <CardFooter>
                  <Button
                    color="blue"
                    buttonType="link"
                    size="lg"
                    ripple="light"
                    onClick={() => handleCreateButtonClick(project.id)}
                    className="w-40 h-12"
                  >
                    Create Task Chart
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="mt-4 text-center">No team projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectOfTeams;
