
'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function JudgesPage() {
  const [chestNumber, setChestNumber] = useState('');
  const [marks, setMarks] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const { error } = await supabase
        .from('marks')
        .insert([{ chest_number: chestNumber, marks: parseInt(marks, 10) }]);

      if (error) {
        throw error;
      }

      setMessage('Marks submitted successfully!');
      setChestNumber('');
      setMarks('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">Enter Marks</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="chestNumber"
            >
              Chest Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="chestNumber"
              type="text"
              placeholder="Enter chest number"
              value={chestNumber}
              onChange={(e) => setChestNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="marks"
            >
              Marks
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 bg-gray-700 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="marks"
              type="number"
              placeholder="Enter marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition duration-300 hover:scale-105"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        {message && (
          <p className="text-green-400 text-center text-sm mt-4">{message}</p>
        )}
        {error && (
          <p className="text-red-400 text-center text-sm mt-4">Error: {error}</p>
        )}
      </div>
    </div>
  );
}
