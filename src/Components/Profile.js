import React from "react";

function Profile({
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  public_repos,
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

        <a href="https://twitter.com/AdaOhafia/">{twitter_username}</a>

        <p>{public_repos}</p>
        <a href="https://github.com/UgoChiori">{html_url}</a>
      </div>
    </div>
  );
}

export default Profile;
