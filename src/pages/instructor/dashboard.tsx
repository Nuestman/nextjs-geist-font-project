"use client";

import { useSession, signOut } from "next-auth/react";

export default function InstructorDashboard() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Instructor Dashboard</h1>
        <button
          onClick={() => signOut({ callbackUrl: "/auth/signin" })}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </header>
      <main className="p-8">
        <p className="text-lg">Welcome, {session?.user?.email}</p>
        {/* Instructor dashboard content goes here */}
      </main>
    </div>
  );
}
