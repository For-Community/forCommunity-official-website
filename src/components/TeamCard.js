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
                <a href={sociallinks.github}>
                  <span className="fa fa-github" target="_blank" rel="noreferrer"></span>
                </a>
                <a href={sociallinks.twitter}>
                  <span className="fa fa-twitter" target="_blank" rel="noreferrer"></span>
                </a>
                <a href={sociallinks.linkedin}>
                  <span className="fa fa-linkedin" target="_blank" rel="noreferrer"></span>
                </a>
                <a href={sociallinks.facebook} target="_blank" rel="noreferrer">
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
