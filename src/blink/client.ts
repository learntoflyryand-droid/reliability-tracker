import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'reliabilit-tracker-ngz738y8',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_fs1rYw0h4T3bVsUoPXo1hFHF9fDk9Vr3',
  authRequired: false,
  auth: { mode: 'managed' },
})
