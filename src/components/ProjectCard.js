import React from "react";

function ProjectCard({ title, img, desc, links}) {
  return (
    <>
      <div className="project-item">
        <img src={img} alt="" className="image" style={{ width: "100%" }} />
        <div className="inner">
          <div class="info">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="social-links">
              <a href={links.git}>
                  <span class="fab fa-github"></span>
              </a>
              <a href={links.web}>
                  <span class="fab fa-firefox-browser"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
