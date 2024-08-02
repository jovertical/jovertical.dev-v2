import { cookies } from 'next/headers'

/**
 * This function should not exist :) Its only purpose is to correct an issue
 * currently present in Next.js!
 *
 * You may not know this, but third-party cookies as we know them are in the
 * process of being eliminated by browsers to improve user privacy and security.
 *
 * The new secure way of setting cookies involves using CHIPS, or a partitioned
 * storage system, with separate cookie jars for each top-level site.
 *
 * Implementation is very simple: you just need to add a new cookie attribute to
 * the old Set-Cookie call:
 *
 * - Set-Cookie: __Host-name=value; Secure; Path=/; SameSite=None;
 * + Set-Cookie: __Host-name=value; Secure; Path=/; SameSite=None; Partitioned;
 *
 * The activation of Next.js's Draft Mode currently sets the cookie WITHOUT this
 * attribute... but our website needs to be accessible within the iframe of the
 * "Web Previews" plugin! Setting a cookie inside an iframe is considered a
 * third-party cookie... so we need to rewrite the cookie set by
 * `draftMode().enable()`, manually adding the partitioned attribute.
 *
 * Third-party cookie deprecation: https://developers.google.com/privacy-sandbox/3pcd
 * CHIPS: https://developers.google.com/privacy-sandbox/3pcd/chips
 */

export function makeDraftModeWorkWithinIframes() {
  // Read the cookie just set by draftMode().enable() or draftMode().disable()...
  const cookieStore = cookies()
  const cookie = cookieStore.get('__prerender_bypass')!

  // and reapply it with `partitioned: true`
  cookies().set({
    name: '__prerender_bypass',
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
    partitioned: true,
  })
}
