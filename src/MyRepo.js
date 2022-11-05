import React from "react";
import { useParams } from "react-router-dom";

function MyRepo(props) {
  const { id } = useParams();
  return (
    <div style={{
      marginTop: "200px",
      width: "100%",
      height: "300px",
      padding: "10px",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>My Github Repositories</h1>
      
     
    </div>
  );
}

export default MyRepo;
