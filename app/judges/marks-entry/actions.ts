'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function addMark(prevState: any, formData: FormData) {
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

  } catch (error: any) {
    return {
      message: `Failed to submit marks: ${error.message}`,
    }
  }
}
