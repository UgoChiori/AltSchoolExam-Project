import React from "react";

function Profile() {
  return (
    <div id="profile">
      Profile
      <div id="avatar">
        <img id="avatar" src="https://avatars.githubusercontent.com/u/104375171?v=4" alt="avatar" />
      </div>
        <div id="profile-details">
            <h5>City: </h5>
            <h5>Country:</h5>

            <ul>
                <li>English</li>
                <li> Français</li>
                <li> Efìk</li>
                <li>Igbo</li>
            </ul>
            <ul className="">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>OpenSource</li>
            </ul>

        </div>
    


    </div>
  );
}

export default Profile;
