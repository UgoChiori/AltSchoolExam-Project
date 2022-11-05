import React from "react";
import {Link } from "react-router-dom";


 const User = ({ id, name, html_url, description, chooseRepo }) => {
  return (
    
    <Link to={`/portfolio/${id}`}> 
    <div style={{border:'1px solid black'}}className="portfolio" onClick={chooseRepo}>
      
          
      <article key={id}>
        <h4>{name}</h4>
        <p>{description}</p>
        <a href={html_url}>Visit</a>
      </article> 
            
</div>
    </Link>
  );
 };

export default User;