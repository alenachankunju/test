import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">PYPA Talent Test</h1>
        <p className="mb-8 text-center text-gray-600">Welcome to the PYPA Talent Test application. Please select your role to continue.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/judges/login" className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Judge Login
          </Link>
          <Link href="/admin" className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
