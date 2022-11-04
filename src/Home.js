import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://api.github.com/users/UgoChiori")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setRepos(data);
      });
  }, []);

  return (
    <div>
      <h1>{repos.name }</h1>



    </div>
  );
}

export default Home;
