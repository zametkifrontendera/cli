export const login = async ({ emailOrPhone, password }) => {
  const res = await fetch("http://api.vmetke.ru/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailOrPhone, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Ошибка входа");
  }

  const data = await res.json();
  return data.token;
};
