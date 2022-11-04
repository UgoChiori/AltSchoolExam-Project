import React from "react";

function Pagination({
  totalPages,
  handleClick,

  page,
  setPage,
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // Previous button click...
  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  // Next button click...
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <button
        className="buttons"
        style={{ height: "30px", width: "50px" }}
        onClick={(e)=>{handleClick("prev")}}
        
        disabled={page === 1}
      >
        {"<<<"}
      </button>

      <button
        className="buttons"
        style={{ height: "30px", width: "50px" }}
        onClick={(e)=>{handleClick("next")}}
        disabled={page === 9}
      >
        {">>>"}
      </button>
    </div>
  );
}

export default Pagination;
