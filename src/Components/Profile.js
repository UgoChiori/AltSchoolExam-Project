import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { FaGithub, FaTwitter } from "react-icons/fa";

function Profile({
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  html_url,
}) {
  return (
    <>
    <HelmetProvider>
      <title>Software Developer portfolio</title>
      <meta name="description" content="Software developers in Lagos Nigeria" />
      <link rel="canonical" href="http://localhost:3001/portfolio/" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src={imgSrc} alt="lady" />
      </div>
      <h1 alt="profile name" className="pro-name">{name}</h1>
      </div>
      <div id="profile-details">
        
        <p id="bionic">{bio}</p>
        <p id="bionic">{location}</p>
        <div>
          <a href="https://github.com/UgoChiori?tab=followers">
            <h3
              id="bionic"
            >
              Followers: {followers}
            </h3>
          </a>
        </div>
        <div>
          <a href="https://github.com/UgoChiori?tab=following">
            <h3 id="bionic">Following: {following}</h3>
          </a>
        </div>

        <a href="https://twitter.com/AdaOhafia/">
          <button id="icons">{<FaTwitter/>}</button>
        </a>

        <a href="https://github.com/UgoChiori">
          <button id="icons">{<FaGithub/>}</button>
        </a>
      </div>
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;
