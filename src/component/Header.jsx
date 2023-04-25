import React, { useContext } from "react";
import { UserContext } from "../App";

function Header() {
  const { cart } = useContext(UserContext);

  return (
    <div>
      <p> Welcome, total Items: {cart}</p>{" "}
    </div>
  );
}

export default Header;
