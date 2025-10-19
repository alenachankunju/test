'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))

  const supabase = createServerActionClient({ cookies })

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        message: `Login failed: ${error.message}`,
      }
    }
  } catch (error: any) {
    return {
      message: `Login failed: ${error.message}`,
    }
  }

  redirect('/judges/marks-entry')
}
