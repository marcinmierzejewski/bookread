import React from 'react';
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="landing" element={<LandingPage />} /> 
          </Route>          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
   );
};
