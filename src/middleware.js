import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'


export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  //console.log(session)
  // if user is signed in and the current path is / redirect the user to /account
 if (session && req.nextUrl.pathname === '/') {
   return NextResponse.redirect(new URL('/home', req.url))
  }

  if (!session && req.nextUrl.pathname === '/home') {
    return NextResponse.redirect(new URL('/', req.url))
   }

  return res
}

export const config = {
  matcher: ['/','/home'],
}