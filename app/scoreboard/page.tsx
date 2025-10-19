
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Mark {
  chest_number: string;
  total_marks: number;
}

export default function ScoreboardPage() {
  const [marks, setMarks] = useState<Mark[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const { data, error } = await supabase
          .from('marks_view')
          .select('*');

        if (error) {
          throw error;
        }

        setMarks(data);
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

    fetchMarks();

    const channel = supabase
      .channel('realtime marks')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'marks' },
        () => {
          fetchMarks();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">Scoreboard</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-400 text-center">Error: {error}</p>}
        {!loading && !error && (
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Chest Number
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Total Marks
                  </th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark) => (
                  <tr key={mark.chest_number} className="hover:bg-gray-700">
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                      <p className="text-gray-200 whitespace-no-wrap">{mark.chest_number}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-800 text-sm">
                      <p className="text-gray-200 whitespace-no-wrap">{mark.total_marks}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
