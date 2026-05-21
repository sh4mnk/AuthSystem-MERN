"use client"

import { useState, type FormEvent } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data: unknown = await res.json().catch(() => ({}))
      const msg =
        typeof data === "object" && data !== null && "message" in data
          ? String((data as { message?: unknown }).message ?? "")
          : ""

      if (!res.ok) throw new Error(msg || "Something went wrong")
      setMessage("Password reset link sent to your email.")
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (


    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-2xl p-5">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription>Enter your email to receive a reset link</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-1/2 mx-auto h-10 block" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>

            {message && (
              <p className="text-center text-sm text-muted-foreground">{message}</p>
            )}
            <div className="flex justify-center">

            <Link href="/login" className="text-sm text-center underline-offset-4 hover:underline">Back to Login ?</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

