export async function registerUser(data) {
  const response = await fetch("http://vmetke.ru/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }

  return response.json(); // { token, user }
}
