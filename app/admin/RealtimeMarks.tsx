'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

export default function RealtimeMarks({ serverMarks }: { serverMarks: any[] }) {
  const [marks, setMarks] = useState(serverMarks)

  useEffect(() => {
    setMarks(serverMarks)
  }, [serverMarks])

  useEffect(() => {
    const channel = supabase
      .channel('realtime-marks')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'marks' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setMarks((prevMarks) => [...prevMarks, payload.new])
          } else if (payload.eventType === 'UPDATE') {
            setMarks((prevMarks) =>
              prevMarks.map((mark) =>
                mark.id === payload.new.id ? payload.new : mark
              )
            )
          } else if (payload.eventType === 'DELETE') {
            setMarks((prevMarks) =>
              prevMarks.filter((mark) => mark.id !== payload.old.id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Chest Number</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Marks</TableHead>
          <TableHead>Judge</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {marks.map((mark) => (
          <TableRow key={mark.id}>
            <TableCell>{mark.chest_number}</TableCell>
            <TableCell>{mark.category}</TableCell>
            <TableCell>{mark.marks}</TableCell>
            <TableCell>{mark.judge_id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
