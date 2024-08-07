import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect
      width={24}
      height={24}
      x={4}
      y={4}
      fill="#000"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={4}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.97 15 3.89 3.89-3.89 3.888"
    />
    <path
      stroke="#fff"
      className="transition-all delay-700 group-hover:translate-x-[2px]"
      strokeLinecap="round"
      strokeWidth={2}
      d="M19 22h4"
    />
    <path stroke="#fff" strokeLinecap="square" strokeWidth={2} d="M4 10h24" />
  </svg>
)
export { SvgComponent as Terminal }
