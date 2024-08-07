import * as React from 'react'
import { SVGProps } from 'react'
const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M22.636 22.364a1 1 0 0 1 0-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414 0ZM9.364 9.636a1 1 0 0 1 0 1.414L4.414 16l4.95 4.95a1 1 0 1 1-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414L7.95 9.636a1 1 0 0 1 1.414 0Zm10.368 2.168a1 1 0 1 0-1.732-1l-6 10.392a1 1 0 0 0 1.732 1l6-10.392Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CodeIcon
