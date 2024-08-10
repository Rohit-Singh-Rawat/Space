import Script from 'next/script'
import React from 'react'

export const Analytics = () => {
  console.log(
    process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    process.env.NEXT_PUBLIC_UMAMI_URL,
    process.env.NODE_ENV
  )
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <Script
          defer
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
        />
      )}
    </>
  )
}
