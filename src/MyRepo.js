import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function MyRepo(props) {
  const { id } = useParams();
  const [repo, setRepo] = useState([]);

 
  const [portfolio, setPortFolio] = useOutletContext();
 ;

  useEffect(() => {
    portfolio.map((item) => {
      if (item.id === id) {
        setRepo(item);
      }
    });
 ;
  }, []);

  return (
    <div
      style={{
        marginTop: "50px",
        width: "100%",
        height: "300px",
        padding: "10px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <a href={repo.html_url}>Visit</a>
      
      

    </div>
  );
}

export default MyRepo;
