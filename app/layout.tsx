
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-white font-bold text-xl">
              Home
            </Link>
            <div>
              <Link href="/judges" className="text-gray-300 hover:text-white mr-4">
                Judges
              </Link>
              <Link href="/scoreboard" className="text-gray-300 hover:text-white">
                Scoreboard
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
