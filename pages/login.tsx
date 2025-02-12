// File: pages/login.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { APP_NAME } from "../config/settings";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        // Redirect user based on role
        router.push(data.isAdmin ? "/admin/dashboard" : "/chat");
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login client error:", err);
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Login - {APP_NAME}</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500 underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default Login;