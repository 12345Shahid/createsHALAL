// File: auth/signup.ts
export async function signUp(email: string, password: string) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Signup failed");

    return data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}