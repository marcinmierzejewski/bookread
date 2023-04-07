import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {

  return (
    <>
      <div>
        nawigacja
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>      
    </>
  );
};
