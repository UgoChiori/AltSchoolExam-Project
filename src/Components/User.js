import React from "react";
import {Link } from "react-router-dom";


 const User = ({ id, name, description, chooseRepo }) => {
  return (
    
    <Link to={`/portfolio/${id}`}> 
    <div style={{border:'4px solid black', backgroundColor: 'lightslategrey',borderRadius:'10px', height:'90%', width:'280px'}}className="portfolio" onClick={chooseRepo}>
      
          
      <article key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Click</p>


  
      </article> 
            
</div>
    </Link>
  );
 };

export default User;