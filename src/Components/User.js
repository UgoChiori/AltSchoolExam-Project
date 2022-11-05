import React from "react";
import {Link } from "react-router-dom";


 const User = ({ id, name, description, chooseRepo }) => {
  return (
    
    <Link to={`/portfolio/${id}`}> 
    <div style={{border:'1px solid black', height:'90%', width:'280px'}}className="portfolio" onClick={chooseRepo}>
      
          
      <article key={id}>
        <h4>{name}</h4>
        <p>{description}</p>
  
      </article> 
            
</div>
    </Link>
  );
 };

export default User;