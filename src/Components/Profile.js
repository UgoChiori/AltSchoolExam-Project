import React from "react";
import { HelmetProvider } from "react-helmet-async";

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
      <link rel="canonical" href="/portfolio" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src={imgSrc} alt="lady" />
      </div>
      <h1 alt="profile name">{name}</h1>
      </div>
      <div id="profile-details">
        
        <p>{bio}</p>
        <p>{location}</p>
        <div>
          <a href="https://github.com/UgoChiori?tab=followers">
            <button
              className="
          buttons"
            >
              Followers: {followers}
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/UgoChiori?tab=following">
            <button className="buttons">Following: {following}</button>
          </a>
        </div>

        <a href="https://twitter.com/AdaOhafia/">
          <button className="btns">{twitter_username}</button>
        </a>

        <a href="https://github.com/UgoChiori">
          <button className="btns">{html_url}</button>
        </a>
      </div>
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;
