'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface AuthState {
  message: string;
}

export async function login(prevState: AuthState, formData: FormData): Promise<AuthState> {
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
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: `Login failed: ${error.message}`,
      }
    }
    return {
      message: 'An unknown error occurred.'
    }
  }

  redirect('/judges/marks-entry')
}
