import React from "react";

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
    <div id="profile">
      <div id="avatar">
        <img src={imgSrc} alt="avatar" />
      </div>
      <div id="profile-details">
        <h1>{name}</h1>
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
  );
}

export default Profile;
