/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

function ProjectCard({ title, img, desc, web, git }) {
  const [langInfo, setLangInfo] = useState({});

  useEffect(() => {
    fetchLangs();
  }, []);

  const fetchLangs = async () => {
    if (git !== "") {
      let l = git;
      let arr = l.split("/");
      let repoName = arr[arr.length - 1];
      let userName = arr[arr.length - 2];
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.github.com/repos/${userName}/${repoName}/languages?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      const data = response.data;
      // console.log(data);
      let sum = 0;
      for (const prop in data) {
        sum = sum + data[prop];
      }
      for (const prop in data) {
        data[prop] = parseInt((data[prop] / sum) * 100);
      }
      console.log(data);
      // console.log(sum);
      setLangInfo(data);
    }
  };

  return (
    <Fragment>
      <div className="project-item">
        <img src={img} alt="" className="image" style={{ width: "100%" }} />
        <div className="inner">
          <div class="info">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="languages">
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                  fontSize: "20px",
                }}
              >
                Languages
              </h3>
              {langInfo &&
                Object.keys(langInfo).map((key) => {
                  return (
                    <Fragment>
                      <li>
                        <h3 style={{ color: "darkcyan", fontWeight: "bolder" }}>
                          {" "}
                          {key} ({langInfo[key]}%)
                        </h3>
                        <span className="bar">
                          <span
                            style={{
                              width: `${langInfo[key]}%`,
                              animation: "ease-in-out 2s",
                            }}
                          ></span>
                        </span>
                      </li>
                    </Fragment>
                  );
                })}
            </div>
            <div className="social-links">
              <a
                href={git}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: git !== "" ? "block" : "none",
                }}
              >
                <span class="fab fa-github"></span>
              </a>
              <a
                href={web}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: web !== "" ? "block" : "none",
                }}
              >
                <span class="fa fa-chrome"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectCard;
