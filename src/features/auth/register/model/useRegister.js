import { useState } from "react";
import { registerUser } from "@/entities/user/api/userApi";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (form, onSuccess) => {
    setLoading(true);
    setError(null);

    try {
      const res = await registerUser(form);
      localStorage.setItem("token", res.token);
      onSuccess && onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}
