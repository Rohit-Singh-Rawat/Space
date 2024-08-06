import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    {...props}
    className="size-10"
  >
    <path
      className="dark:fill-white"
      d="M10.02 9.276h1.49V5.7L9.832 4.021 8.779 5.075l1.242 1.242zm1.494.747H6.318L5.076 8.781l.527-.526 1.026 1.026h2.11L6.66 7.198l.53-.53 2.08 2.079V6.636L8.248 5.614l.523-.522-2.583-2.595H1l1.486 1.486v.004h3.081l1.09 1.089-1.593 1.592-1.089-1.09v-.844h-1.49v1.462l2.58 2.579-1.05 1.05 1.678 1.678H13l-1.486-1.478z"
    />
  </svg>
)
export { SvgComponent as WebSocket }
