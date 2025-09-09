export const register = async ({ name, emailOrPhone, password }) => {
  const res = await fetch("http://api.vmetke.ru/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, emailOrPhone, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Ошибка регистрации");
  }

  const data = await res.json();
  return data.token;
};
