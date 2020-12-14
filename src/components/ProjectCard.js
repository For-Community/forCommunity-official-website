import React from "react";

function ProjectCard({ img, desc, links}) {
  return (
    <div className="projectCard">
      <img src={img} alt="" className="image" style={{ width: "100%" }} />
      <div className="project-middle">
        <div className="project-text">
          {desc}
          <div className="btn">
            <a href={links.git}>
              <button className="button">
                <i class="fab fa-github"></i>
              </button>
            </a>
            <a href={links.web}>
              <button className="button">
                <i class="fab fa-firefox-browser"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
