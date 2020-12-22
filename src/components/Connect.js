import React, { useState, useEffect } from "react";

import ConnectSectionData from "../data/ConnectSectionData";

const Contact = () => {
    const [connectData, setConnectData] = useState([]);

    useEffect(() => {
      setConnectData(ConnectSectionData);
      console.log(ConnectSectionData);
    }, []);


    return (
      <div className="contact-section" id="connect">
        <div class="contact-container">
          <div class="contact-row">
            <div class="contact-title">
              <h1>Want to Join Us?</h1>
              <p>Our Social Media Presence</p>
            </div>
          </div>
          <div class="social-row">
            <div class="social-info">
              {connectData.map((connect) => (
                <div class="social-card">
                  <a href={connect.sociallink}>
                    <i class={`social-card-icon ${connect.faclass}`} />
                  </a>
                      <p>{connect.sociallinktext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
