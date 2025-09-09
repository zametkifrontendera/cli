import React, { useState } from "react";
import { register } from "../model/registerModel";
import { useNavigate } from "react-router-dom";
import { passwordStrength } from "../lib/validation";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    try {
      const token = await register({ name, emailOrPhone, password });
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const strength = passwordStrength(password);

  return (
    <div className="register-page">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        {password && <p className={`strength ${strength.toLowerCase()}`}>Пароль: {strength}</p>}
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
