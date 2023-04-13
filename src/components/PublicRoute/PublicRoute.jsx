import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ redirectPath = "/" }) => {
  const token = useSelector((state) => state.token);

  return token ? <Navigate to={redirectPath} /> : <Outlet />;
};

export default PublicRoute;
