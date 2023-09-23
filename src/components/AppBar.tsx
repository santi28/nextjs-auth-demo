/* eslint-disable @next/next/no-img-element */
'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function AppBar() {
  const { data: session } = useSession()

  return (
    <header className="flex items-center justify-between py-6 px-16 border-b border-neutral-800">
      <h1 className="text-2xl font-bold">Next.js + NextAuth.js</h1>

      <div className="flex items-center gap-4">
        {
          session ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">{session.user?.username ?? ''}</span>
              <img
                className="w-8 h-8 rounded-full"
                src={session.user?.image ?? ''}
                alt={session.user?.username ?? ''}
              />
            </div>
          ) : null
        }

        {
          session ? (
            <button
              onClick={() => signOut()}
              className="hover:bg-neutral-800 rounded-lg px-4 py-2.5">
              <span className="text-sm">Sign out</span>
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="hover:bg-neutral-800 rounded-lg px-4 py-2.5">
              <span className="text-sm">Sign in</span>
            </button>
          )
        }
      </div>
    </header>
  )
}