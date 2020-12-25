import React, { useState, useEffect, Fragment } from "react";
import TeamSectionData from "../data/TeamSectionData";
import TeamCard from "./TeamCard";
let count = 4;
let posts = [];
let myData = [...TeamSectionData];
let tempPosts = [...myData];

function TeamSection() {
  // const [teamData, setTeamData] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [current, setCurrent] = useState(0);

  const showMembersMore = (start, end) => {
    const selectedPosts = myData.splice(start, end);
    posts = [...posts, ...selectedPosts];
    setTeamMembers(posts);
  };

  // const showMembersLess = (start, end) => {
  //   const selectedPosts = tempPosts.slice(start, end);
  //   setTeamMembers(selectedPosts);
  //   // TeamSectionData
  // };

  useEffect(() => {
    // setTeamData(TeamSectionData);
    showMembersMore(0, count);
    // console.log(TeamSectionData)
  }, []);

  const onClickMore = () => {
    showMembersMore(current, count);
  };

  const onClickLess = () => {
    myData = [...tempPosts];
    // console.log(myData);
    console.log(tempPosts);
    posts = [];
    showMembersMore(current, count);
  };

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
            {teamMembers.map((team) => (
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
      <div>
        {myData.length > 0 ? (
          <Fragment>
            <div class="button_cont" align="center">
              <a
                class="example_e"
                target="_blank"
                rel="nofollow noopener"
                onClick={onClickMore}
              >
                Show More
              </a>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div class="button_cont" align="center">
              <a
                class="example_e"
                target="_blank"
                rel="nofollow noopener"
                onClick={onClickLess}
              >
                Show Less
              </a>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default TeamSection;
