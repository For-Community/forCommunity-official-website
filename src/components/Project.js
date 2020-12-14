import React, {useState, useEffect} from "react";

import ProjectSectionData from "../data/ProjectSectionData"
import ProjectCard from "./ProjectCard";

function Project() {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    setProjectData(ProjectSectionData);
    console.log(ProjectSectionData);
  }, []);

  return (
    <div className="project" id="project">
      <h2>Check out some of our builds</h2>
      <div className="pro-card">
        {
                projectData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    img={project.imglink}
                    desc={project.desc}
                    designation={project.designation}
                    links={project.links}
                  />
                ))}
      </div>
    </div>
  );
}

export default Project;
