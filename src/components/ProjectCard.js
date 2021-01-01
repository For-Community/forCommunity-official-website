import React, {Fragment} from "react";

function ProjectCard({ title, img, desc, links}) {
  return (
    <Fragment>
      <div className="project-item">
        <img src={img} alt="" className="image" style={{ width: "100%" }} />
        <div className="inner">
          <div class="info">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="social-links">
              <a
                href={links.git}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: links.git !== "" ? "block" : "none",
                }}
              >
                <span class="fab fa-github"></span>
              </a>
              <a
                href={links.web}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: links.web !== "" ? "block" : "none",
                }}
              >
                <span class="fa fa-chrome"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectCard;