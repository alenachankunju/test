'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login } from './actions'
import { Mail, Lock } from 'lucide-react'

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Signing in...' : 'Sign in'}
    </button>
  )
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-indigo-600 p-4">
            <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0v7m-4-4h8" />
            </svg>
          </div>
        </div>
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">Judge Login</h1>
        <p className="mb-8 text-center text-gray-600">Sign in to your account</p>
        <form action={formAction}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          {state.message && (
            <p className="mb-4 text-center text-red-500">{state.message}</p>
          )}
          <SubmitButton />
        </form>
      </div>
    </main>
  )
}
