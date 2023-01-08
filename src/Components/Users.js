import React from "react";
import User from "./User";
import { USER_PER_PAGE } from "./UserPerPage";

const Users = ({ users, page, chooseRepo, scrollView, dynamicRoute }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

  return (
    <div
      id="data-card"
      style={
        {
          // border: "1px solid yellow",
          // width: "100%",
        }
      }
    >
      {selectedUsers.map((user) => (
        <User
          id={user.id}
          name={user.name}
          html_url={user.html_url}
          description={user.description}
          chooseRepo={chooseRepo}
        />
      ))}
    </div>
  );
};

export default Users;
