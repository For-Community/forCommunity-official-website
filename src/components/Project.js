import React, { useState, useEffect } from "react";
import ProjectSectionData from "../data/ProjectSectionData";
import ProjectCard from "./ProjectCard";

function Project() {
  const [projectData, setProjectData] = useState([]);
  const [visiblity, setVisiblity] = useState(4);

  const viewmore = () => {
    setVisiblity(visiblity + 4);
  };

  const hide = () => {
    setVisiblity(visiblity - 8);
  };

  useEffect(() => {
    setProjectData(ProjectSectionData);
    // console.log(ProjectSectionData);
  }, []);

  return (
    <div className="project-section" id="project">
      <div class="project-container">
        <div class="project-row">
          <div class="project-title">
            <h1>Check out some of our builds</h1>
          </div>
        </div>
        <div class="project-row">
          <div class="project-items">
            {projectData.slice(0, visiblity).map((project) => (
              <ProjectCard
                key={project.id}
                img={project.imglink}
                title={project.title}
                desc={project.desc}
                designation={project.designation}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="btn-h">
        {visiblity < 10 ? (
          <button className="btn-btn1" onClick={viewmore}>
            Show More
          </button>
        ) : (
          <button className="btn-btn1" onClick={hide}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Project;
