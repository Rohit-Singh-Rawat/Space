'use client'
import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from '@/context/theme-provider'
import * as React from 'react'
import { RecoilRoot } from 'recoil'

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
        <NextTopLoader showSpinner={false} color="#91990b" />
        <RecoilRoot>{children} </RecoilRoot>
      </ThemeProvider>
    </>
  )
}
