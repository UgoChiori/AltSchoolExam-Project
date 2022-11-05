import React from "react";
import User from "./User";
import {USER_PER_PAGE} from "./UserPerPage";

const Users = ({users, page, chooseRepo }) => {
    const startIndex = (page -1) * USER_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

    
    return selectedUsers.map(user => (
        <User  id={user.id} name={user.name} html_url={user.html_url} description={user.description} chooseRepo={chooseRepo} />
    ))
    
    
}

export default Users