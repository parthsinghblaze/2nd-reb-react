import React, { useContext } from "react";
import { UserContext } from "../App";

function ComponentC() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h1>User Name : {userName} </h1>
    </div>
  );
}

export default ComponentC;
