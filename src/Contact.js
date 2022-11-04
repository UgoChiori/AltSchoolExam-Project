import React from "react";
import { NavLink } from "react-router-dom";


function MyForm  ()  {
  return (
    <div>
      <form alt="contact form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Send</button>
      </form>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}


export default MyForm; 