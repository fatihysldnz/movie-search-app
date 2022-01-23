import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
