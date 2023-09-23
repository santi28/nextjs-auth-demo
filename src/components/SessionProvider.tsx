'use client'

import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export default function NextSessionProvider({ children }: Props) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}