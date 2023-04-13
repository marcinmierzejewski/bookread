import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/landing" }) => {
  const token = useSelector((state) => state.token);

  return token ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;
