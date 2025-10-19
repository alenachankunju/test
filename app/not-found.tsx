import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col items-center">
          <AlertTriangle className="h-16 w-16 text-yellow-500" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
          <p className="mt-2 text-center text-gray-600">The page you are looking for does not exist. It might have been moved or deleted.</p>
          <Link href="/" className="mt-6 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Go back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
