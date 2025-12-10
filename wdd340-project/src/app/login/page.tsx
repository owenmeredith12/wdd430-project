"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setError(result.error)
      return
    }

    // redirect after successful login
    router.push("/account")
  }

  return (
    <main className="max-w-sm mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="p-2 bg-black text-white rounded"
        >
          Login
        </button>
      </form>
    </main>
  )
}
