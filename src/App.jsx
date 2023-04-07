import React from 'react';
import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="landing" element={<LandingPage />} />  
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
   );
};
