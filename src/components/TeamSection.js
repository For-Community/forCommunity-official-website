import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import TeamCard from "./TeamCard";
function TeamSection() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [visiblity, setVisiblity] = useState(4);

  useEffect(() => {
    db.collection("teams")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTeamMembers(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  // console.log(teamMembers.length);

  // console.log(teamMembers);
  let a = teamMembers.length;
  // console.log(teamMembers);
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
                name={team.name}
                img={team.img}
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
        {visiblity < a ? (
          <div class="button_cont" align="center">
            <button
              className="project-btn-btn1"
              onClick={() => setVisiblity(visiblity + 4)}
            >
              Show More
            </button>
          </div>
        ) : (
          <div class="button_cont" align="center">
            <button
              className="project-btn-btn1"
              onClick={() => setVisiblity(visiblity - 8)}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamSection;
