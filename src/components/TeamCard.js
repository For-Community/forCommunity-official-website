import React,{Fragment} from 'react'

const TeamCard = ({ name, img, designation, sociallinks }) => {
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
                  href={sociallinks.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: sociallinks.github !== "" ? "block" : "none",
                  }}
                >
                  <span className="fa fa-github"></span>
                </a>
                <a
                  href={sociallinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: sociallinks.twitter !== "" ? "block" : "none",
                  }}
                >
                  <span className="fa fa-twitter"></span>
                </a>
                <a
                  href={sociallinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: sociallinks.linkedin !== "" ? "block" : "none",
                  }}
                >
                  <span className="fa fa-linkedin"></span>
                </a>
                <a
                  href={sociallinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: sociallinks.facebook !== "" ? "block" : "none",
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
}

export default TeamCard
