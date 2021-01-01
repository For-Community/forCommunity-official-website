import React, { Fragment } from "react";

const TeamCard = ({
  name,
  img,
  designation,
  github,
  twitter,
  linkedin,
  facebook,
}) => {
  return (
    <Fragment>
      <div class="team-item">
        <img src={img} alt="profile img" />
        <div class="inner">
          <div class="info">
            <h5>{name}</h5>
            <p>{designation}</p>
            <div class="social-links">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: github !== "" ? "block" : "none",
                }}
              >
                <span className="fa fa-github"></span>
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: twitter !== "" ? "block" : "none",
                }}
              >
                <span className="fa fa-twitter"></span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: linkedin !== "" ? "block" : "none",
                }}
              >
                <span className="fa fa-linkedin"></span>
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: facebook !== "" ? "block" : "none",
                }}
              >
                <span className="fa fa-facebook"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TeamCard;
