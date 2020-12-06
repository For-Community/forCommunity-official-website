import React from 'react'

import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"

function TeamSection() {
    return (
        <div className="team-section" id="community">
            <div class="team-container">
                <div class="team-row">
                    <div class="team-title">
                        <h1>Our Community</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae omnis quas esse itaque. Reiciendis, sapiente.</p>
                    </div>
                </div>
                <div class="team-row">
                    <div class="team-items">
                        <div class="team-item">
                            <img src={team1} alt="profile img" />
                            <div class="inner">
                                <div class="info">
                                    <h5>Name 1</h5>
                                    <p>Founder, React Dev</p>
                                    <div class="social-links">
                                        <a href="/"><span className="fa fa-github"></span></a>
                                        <a href="/"><span className="fa fa-twitter"></span></a>
                                        <a href="/"><span className="fa fa-linkedin"></span></a>
                                        <a href="/"><span className="fa fa-facebook"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-item">
                            <img src={team2} alt="profile img" />
                            <div class="inner">
                                <div class="info">
                                    <h5>Name 2</h5>
                                    <p>Designer</p>
                                    <div class="social-links">
                                        <a href="/"><span className="fa fa-github"></span></a>
                                        <a href="/"><span className="fa fa-twitter"></span></a>
                                        <a href="/"><span className="fa fa-linkedin"></span></a>
                                        <a href="/"><span className="fa fa-facebook"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-item">
                            <img src={team3} alt="profile img" />
                            <div class="inner">
                                <div class="info">
                                    <h5>Name 3</h5>
                                    <p>UI/UX</p>
                                    <div class="social-links">
                                        <a href="/"><span className="fa fa-github"></span></a>
                                        <a href="/"><span className="fa fa-twitter"></span></a>
                                        <a href="/"><span className="fa fa-linkedin"></span></a>
                                        <a href="/"><span className="fa fa-facebook"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="team-item">
                            <img src={team4} alt="profile img" />
                            <div class="inner">
                                <div class="info">
                                    <h5>Name 4</h5>
                                    <p>Machine Learning</p>
                                    <div class="social-links">
                                        <a href="/"><span className="fa fa-github"></span></a>
                                        <a href="/"><span className="fa fa-twitter"></span></a>
                                        <a href="/"><span className="fa fa-linkedin"></span></a>
                                        <a href="/"><span className="fa fa-facebook"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection
