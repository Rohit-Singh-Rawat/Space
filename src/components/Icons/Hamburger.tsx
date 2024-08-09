import * as React from 'react'
import { SVGProps } from 'react'
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#363636"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 8h7M6 12h2m10 0h-8m-2 4h7"
    />
  </svg>
)
export default Hamburger
