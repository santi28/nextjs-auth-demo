/* eslint-disable @next/next/no-img-element */
'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { IconLogout } from '@tabler/icons-react'

export default function AppBar() {
  const { data: session } = useSession()

  return (
    <header className="flex items-center justify-between py-6 px-16 border-b border-neutral-800">
      <a href="/" className="text-2xl font-bold text-neutral-100">NextAuth.js</a>

      <div className="flex items-center gap-4">
        {
          session ? (
            <a
              href="/profile" 
              className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src={session.user?.image ?? ''}
                alt={session.user?.username ?? ''}
              />
              <div className="flex flex-col">
                <span className="text-sm">{session.user?.firstName ?? ''} {session.user?.lastName ?? ''}</span>
                <span className="text-xs text-neutral-300">{session.user?.email ?? ''}</span>
              </div>
            </a>
          ) : null
        }

        {
          session ? (
            <button
              onClick={() => signOut()}
              className="hover:bg-neutral-800 rounded-lg p-2.5">
                <IconLogout className="w-5 h-5" />
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