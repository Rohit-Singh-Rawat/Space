'use client'
import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from '@/context/theme-provider'
import * as React from 'react'

interface ChildrenProps {
  readonly children: React.ReactNode
}

export function Providers({ children }: ChildrenProps) {
  return (
    <>
      {' '}
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextTopLoader showSpinner={false} color="#cc9d078c" />
        {children}{' '}
      </ThemeProvider>
    </>
  )
}
