"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔥 TODO: connect your API here
    console.log("Reset link sent to:", email);
  };

  
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-sm space-y-6">

          <div className="text-center">
            <h1 className="text-2xl font-semibold">Forgot Password</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your email to receive a reset link
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Remember your password?{" "}
            <a href="/Login" className="underline">
              Back to login
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (OPTIONAL IMAGE) */}
      <div className="hidden lg:flex items-center justify-center bg-white p-10">
        <img
          src="/computer-security-with-login-password-padlock.jpg"
          alt="Forgot password"
          className="max-w-full max-h-full object-contain"
        />
      </div>

    </div>
  );
}