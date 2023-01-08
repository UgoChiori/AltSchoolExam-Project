import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, name, description, chooseRepo }) => {
  return (
    <Link to={`/portfolio/${id}`}>
      <div className="user-data"
      style={{border: "5px solid white", borderRadius: "10px", width:"350px", height: '400px', background: 'grey'}} 
      onClick={chooseRepo}
      >
  <article key={id}>
          <h3 className="repo_name">{name}</h3>
          <p id="desc">{description}</p>
          <button style={{ border: "1px solid black" }}>View More</button>
        </article> 
      </div>
      {/* <section
        className="user-data"
        style={{
          // backgroundColor: "lightslategrey",
          borderRadius: "10px",
          
        }}
        onClick={chooseRepo}
      >
        <article key={id}>
          <h3 className="repo_name">{name}</h3>
          <p id="desc">{description}</p>
          <button style={{ border: "1px solid black" }}>View More</button>
        </article>
      </section> */}
    </Link>
  );
};

export default User;
