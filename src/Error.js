import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
            <h1>🙄🙄🙄🙄🙄🙄</h1>
            <img
        src={require("./404error.jpeg")}
        alt="funny error 404 meme...grumpy troll"
      />

            <NavLink to="/">Home</NavLink>
            </div>
  )
  
}

export default Error