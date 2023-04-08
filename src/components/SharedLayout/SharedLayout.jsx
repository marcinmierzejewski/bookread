import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";


export const SharedLayout = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        nawigacja {user.name}
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>      
    </>
  );
};
