import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ShoppingСart from "./components/ShoppingСart";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/cart" element={<ShoppingСart />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default useRoutes;
