import React, { useContext } from "react";
import { WrapperContext } from "../App";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLogin } = useContext(WrapperContext);

  if (isLogin) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
