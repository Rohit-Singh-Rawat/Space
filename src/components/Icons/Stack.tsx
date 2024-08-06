import * as React from 'react'
import { SVGProps } from 'react'
const Stack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <g className="nc-icon-wrapper">
      <path
        fill="#2a4b55"
        className="-translate-y-2 transition-all duration-300 ease-linear group-hover/stack:-translate-y-0"
        d="m45.5 32.131-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0-.371 1.369.986.986 0 0 0 .371.371l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 0-1.736Z"
      />
      <path
        fill="#4d8b9d"
        d="m45.5 23.132-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0 0 1.736l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 .371-1.365.986.986 0 0 0-.371-.371Z"
      />
      <path
        fill="#8ebac7"
        className="translate-y-2 transition-all duration-300 ease-linear group-hover/stack:translate-y-0"
        d="m45.5 14.132-21-12a1 1 0 0 0-.992 0l-21 12a1 1 0 0 0 0 1.736l21 12a1 1 0 0 0 .992 0l21-12a1 1 0 0 0 0-1.736Z"
      />
    </g>
  </svg>
)
export default Stack
