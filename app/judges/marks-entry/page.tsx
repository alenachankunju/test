'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { addMark } from './actions'
import { User, Tag, Award } from 'lucide-react'

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
      {pending ? 'Submitting...' : 'Submit Marks'}
    </button>
  )
}

export default function MarksEntryPage() {
  const [state, formAction] = useFormState(addMark, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900">Enter Marks</h1>
        <p className="mb-8 text-center text-gray-600">Enter the participant's details and marks</p>
        <form action={formAction}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="chest-number">
              Chest Number
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                id="chest-number"
                name="chest-number"
                type="text"
                placeholder="Enter chest number"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="category">
              Category
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                id="category"
                name="category"
                type="text"
                placeholder="Enter category"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="marks">
              Marks
            </label>
            <div className="relative">
              <Award className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                id="marks"
                name="marks"
                type="number"
                placeholder="Enter marks"
                required
              />
            </div>
          </div>
          {state.message && (
            <p className="mb-4 text-center text-green-500">{state.message}</p>
          )}
          <SubmitButton />
        </form>
      </div>
    </main>
  )
}
