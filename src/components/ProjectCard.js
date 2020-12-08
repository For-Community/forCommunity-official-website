import React from "react";

function ProjectCard({ img, title, git, site }) {
  return (
    <div className="projectCard">
      <img src={img} alt="" className="image" style={{ width: "100%" }} />
      <div className="project-middle">
        <div className="project-text">
          {title}
          <div className="btn">
            <a href={git}>
              <button className="button">
                <i class="fab fa-github"></i>
              </button>
            </a>
            <a href={site}>
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
