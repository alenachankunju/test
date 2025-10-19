'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

interface MarkState {
  message: string;
}

export async function addMark(prevState: MarkState, formData: FormData): Promise<MarkState> {
  const chestNumber = String(formData.get('chest-number'))
  const category = String(formData.get('category'))
  const marks = Number(formData.get('marks'))

  const supabase = createServerActionClient({ cookies })

  try {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return {
        message: 'Authentication failed. Please log in again.',
      }
    }

    const { error } = await supabase
      .from('marks')
      .insert([{ chest_number: chestNumber, category, marks, judge_id: user.id }])

    if (error) {
      return {
        message: `Failed to submit marks: ${error.message}`,
      }
    }

    revalidatePath('/admin')
    return { message: 'Marks submitted successfully!' }

  } catch (error) {
    if (error instanceof Error) {
      return {
        message: `Failed to submit marks: ${error.message}`,
      }
    }
    return {
      message: 'An unknown error occurred.'
    }
  }
}
