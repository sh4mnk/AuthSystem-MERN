"use client"

import { LogoutButton } from "@/components/logout-button"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <LogoutButton />
      </header>
      <main className="p-6">
        <p>This is your dashboard</p>
      </main>
    </div>
  )
}
