import React, {useState, useEffect} from 'react'
import TeamSectionData from "../data/TeamSectionData"
import TeamCard from "./TeamCard"

function TeamSection() {
    const [teamData, setTeamData] = useState([])

    useEffect(() => {
        setTeamData(TeamSectionData);
        console.log(TeamSectionData)
    },[])

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
              {
                teamData.map((team) => (
                  <TeamCard
                        key={team.id}
                    img={team.img}
                    name={team.name}
                    designation={team.designation}
                    sociallinks={team.sociallinks}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default TeamSection
