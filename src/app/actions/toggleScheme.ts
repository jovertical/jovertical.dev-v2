'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export default async function toggleScheme() {
  const store = cookies()

  const scheme = store.get('scheme')?.value || 'light'

  const newScheme = scheme === 'dark' ? 'light' : 'dark'

  store.set('scheme', newScheme, { path: '/' })

  revalidatePath('/')
}
