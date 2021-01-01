import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import TeamCard from "./TeamCard";
function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [visiblity, setVisiblity] = useState(4);

  const viewmore = () => {
    setVisiblity(visiblity + 4);
  };

  const hide = () => {
    setVisiblity(visiblity - 4);
  };

  useEffect(() => {
    db.collection("teams").onSnapshot((snapshot) => {
      setTeamMembers(snapshot.docs.map((doc) => doc.data()));
    });
  });

  return (
    <div className="team-section" id="community">
      <div class="team-container">
        <div class="team-row">
          <div class="team-title">
            <h1>Our Community</h1>
            <p>A small yet growing team of members</p>
          </div>
        </div>
        <div class="team-row">
          <div class="team-items">
            {teamMembers.slice(0, visiblity).map((team) => (
              <TeamCard
                img={team.img}
                name={team.name}
                designation={team.designation}
                github={team.github}
                linkedin={team.linkedin}
                facebook={team.facebook}
                twitter={team.twitter}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* {visiblity > 1 ? (
          <div class="button_cont" align="center">
            <button class="team-btn" onClick={viewmore}>
              Show More
            </button>
          </div>
        ) : (
          <div class="button_cont" align="center">
            <button class="team-btn" onClick={hide}>
              Show Less
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default TeamSection;
