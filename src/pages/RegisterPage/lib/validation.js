export const passwordStrength = (password) => {
  if (!password) return "";
  let score = 0;
  if (password.length >= 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return "Слабый";
  if (score === 2 || score === 3) return "Средний";
  if (score >= 4) return "Сложный";
};
