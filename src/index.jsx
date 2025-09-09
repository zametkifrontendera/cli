import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "@/pages/RegisterPage/ui/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<div>Страница профиля (позже)</div>} />
    </Routes>
  </BrowserRouter>
);
