import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import ProjectCard from "./ProjectCard";
import Loader from "./Loader"

function Project() {
  const [projectData, setProjectData] = useState([]);
  const [visiblity, setVisiblity] = useState(4);
  const [loading,setLoading]= useState(true);

  const viewmore = () => {
    setVisiblity(visiblity + 4);
  };

  const hide = () => {
    setVisiblity(visiblity - 4);
  };

  useEffect(() => {
    db.collection("projects").onSnapshot((snapshot) => {
      setProjectData(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, []);

  const a = projectData.length;

  return (
    <div className="project-section" id="project">

      {
        loading?(<Loader/>):
      (
        <>
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
                    img={project.img}
                    title={project.title}
                    desc={project.desc}
                    designation={project.techstatck}
                    web={project.web}
                    git={project.git}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-btn-h">
            {visiblity < a ? (
              <button className="project-btn-btn1" onClick={viewmore}>
                Show More
              </button>
            ) : (
              <button className="project-btn-btn1" onClick={hide}>
                Show Less
              </button>
            )}
          </div>
        </>
      )
      }

    </div>
  );
}

export default Project;
