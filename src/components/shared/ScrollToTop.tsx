'use client'

import { ArrowUp } from 'lucide-react'
import React, { useState, useEffect, useCallback } from 'react'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const checkScrollPosition = useCallback(() => {
    const scrollPosition = window.scrollY
    const scrollThreshold = document.documentElement.scrollHeight * 0.13

    setIsVisible(scrollPosition > scrollThreshold)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition)
    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [checkScrollPosition])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`group fixed bottom-4 right-4 rounded-full bg-transparent p-3 text-white transition-all duration-500 ease-in-out hover:bg-[#4B4B4B]/30 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-5 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="size-5 text-[#4B4B4B] transition-all duration-500 ease-in-out group-hover:text-black group-hover:dark:text-white" />
      </button>
    </>
  )
}

export default ScrollToTopButton
