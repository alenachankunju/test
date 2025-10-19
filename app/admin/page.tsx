import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import RealtimeMarks from './RealtimeMarks'
import { Search, Download } from 'lucide-react'

export const revalidate = 0

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: marks } = await supabase.from('marks').select('*')

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                type="text"
                placeholder="Search..."
              />
            </div>
            <button className="flex items-center space-x-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <RealtimeMarks serverMarks={marks || []} />
        </div>
      </div>
    </main>
  )
}
