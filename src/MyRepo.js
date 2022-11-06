import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function MyRepo(props) {
  const { id } = useParams();
  const [repo, setRepo] = useState([]);

  const [portfolio, setPortFolio] = useOutletContext();

  useEffect(() => {
    portfolio.map((item) => {
      if (item.id === Number(id)) {
        setRepo(item);
      }
    });
  }, [id]);

  return (
    <div id="outlet"
      style={{
        // marginTop: "50px",
        width: "100%",
        height: "300px",
        padding: "10px",
        border: "4px solid black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightslategrey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 alt="title and details of repositories">{repo.name}</h4>
      <p alt="more details of repos">{repo.description}</p>
      <a href={repo.html_url}>Visit</a>
    </div>
  );
}

export default MyRepo;
