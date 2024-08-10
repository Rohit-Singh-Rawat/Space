import * as React from 'react'
import { SVGProps } from 'react'
const VercelLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    data-testid="geist-icon"
    style={{
      color: 'currentcolor',
    }}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8 1 8 14H0L8 1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default VercelLogoIcon
