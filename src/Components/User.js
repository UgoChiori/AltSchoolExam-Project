import React from "react";

 const User = ({ id, name, html_url, description }) => {
  return (
    
    <div className="portfolio">
        
          
            <article key={id} className="repo">
              <h4>{name}</h4>
              <p>{description}</p>
              <a href={html_url}>Visit</a>
            </article>
                  
      </div>
  );
 };

export default User;