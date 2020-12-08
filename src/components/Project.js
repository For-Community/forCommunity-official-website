import React from "react";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="project" id="project">
      <h2>Check out some of our builds</h2>
      <div className="pro-card">
        <ProjectCard
          img="https://justinnn07.netlify.app/images/portfolio/covid.PNG"
          title="hahah"
          git="https://github.com/for-Community"
          site="https://forcommunityy.web.app/"
        />
        <ProjectCard
          img="https://justinnn07.netlify.app/images/portfolio/discord.PNG"
          title="hahah"
          git="https://github.com/for-Community"
          site="https://forcommunityy.web.app/"
        />
      </div>
    </div>
  );
}

export default Project;
