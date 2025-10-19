
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-indigo-400 mb-4">
          Cultural Fest Scoreboard
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Welcome! Use the navigation to enter scores or view the live scoreboard.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/judges" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-colors">
              Go to Judges
          </Link>
          <Link href="/scoreboard" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg font-semibold transition-colors">
              View Scoreboard
          </Link>
        </div>
      </div>
    </div>
  );
}
