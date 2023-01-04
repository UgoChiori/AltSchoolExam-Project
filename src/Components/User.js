import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, name, description, chooseRepo }) => {
  
  
  return (
    <Link to={`/portfolio/${id}`}>
      <div
        
        id="user-data"
        style={{
         
          // backgroundColor: "lightslategrey",
          borderRadius: "10px",
        }}
        onClick={chooseRepo}
      >
        <article key={id}>
          <h3>{name}</h3>
          <p id="desc">{description}</p>
          <button style={{border:'1px solid black'}}>View More</button>
        </article>
      </div>
    </Link>
  );
};

export default User;
