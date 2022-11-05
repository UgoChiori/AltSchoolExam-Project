import { useState, useEffect } from "react";
import Pagination from "./Components/Pagination";
import { USER_PER_PAGE } from "./Components/UserPerPage";
import Users from "./Components/Users";

function MyGithub() {
  const [portfolio, setPortFolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://api.github.com/users/UgoChiori/repos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPortFolio(data);
        setTotalPages(Math.ceil(data.length / USER_PER_PAGE));
        setLoading(false);
      });
  }, []);
  const handleClick = (btn) => {
    if (btn === "next") {
      setPage(page + 1);
      return;
    }
    setPage(page - 1);
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        setPage={setPage}
        page={page}
      />
      <h1>My Github Repositories</h1>
      <Users users={portfolio} page={page} />
    </div>
  );
}

export default MyGithub;
