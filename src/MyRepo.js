import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function MyRepo(props) {
  const { id } = useParams();
  const [repo, setRepo] = useState([]);

  const [portfolio, setPortFolio, scrollView, dynamicRoute] =
    useOutletContext();
  const ref = useRef();

  useEffect(() => {
    portfolio.map((item) => {
      if (item.id === Number(id)) {
        setRepo(item);
      }
    });
    if (dynamicRoute) {
      scrollView(ref);
    }
  }, [id]);

  return (
    <div id="outlet" ref={ref}>
      <h4 alt="title and details of repositories">{repo.name}</h4>
      <p alt="more details of repos">{repo.description}</p>
      <p alt="more details of repos">{repo.language}</p>
      <p alt="more details of repos">Forks Count: {repo.forks_count}</p>

      <a href={repo.html_url}>
        <button className="buttons">CLICK FOR MORE </button>
      </a>
    </div>
  );
}

export default MyRepo;
