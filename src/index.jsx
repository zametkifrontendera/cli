import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "@/pages/RegisterPage/ui/RegisterPage";
import { LoginPage } from "@/pages/LoginPage/ui/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/profile" element={<div>Страница профиля (позже)</div>} /> */}
    </Routes>
  </BrowserRouter>
);
