import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import PrivateRoute from "./PrivateRoute";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default CustomRoutes;
