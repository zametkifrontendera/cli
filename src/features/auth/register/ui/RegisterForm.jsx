import React, { useState } from "react";
import Input from "@/shared/ui/Input";
import { useRegister } from "../model/useRegister";
import { useNavigate } from "react-router-dom";

const checkPasswordStrength = (password) => {
  if (password.length < 6) return "Слабый";
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return "Средний";
  if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&#]/.test(password))
    return "Тяжёлый";
  return "Слабый";
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, loading, error } = useRegister();

  const [form, setForm] = useState({
    name: "",
    login: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    await register(
      {
        name: form.name,
        login: form.login,
        password: form.password,
      },
      () => navigate("/profile")
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Регистрация</h2>
      <Input label="Имя" name="name" value={form.name} onChange={handleChange} />
      <Input label="Логин / Email / Телефон" name="login" value={form.login} onChange={handleChange} />
      <Input label="Пароль" type="password" name="password" value={form.password} onChange={handleChange} />
      {form.password && <div>Надёжность пароля: {passwordStrength}</div>}
      <Input label="Повтор пароля" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Регистрация..." : "Зарегистрироваться"}
      </button>
    </form>
  );
};

export default RegisterForm;
