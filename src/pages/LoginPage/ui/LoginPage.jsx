import React, { useState } from "react";
import { login } from "../model/loginModel";
import { useNavigate } from "react-router-dom";

import "./LoginPage.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login({ emailOrPhone, password });
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email или телефон"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
