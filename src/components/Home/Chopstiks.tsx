import * as React from 'react'
import { SVGProps } from 'react'
const Chopstiks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="#333e48"
      className="hid"
      d="M8.82 38.72 30.17 9.79a1.18 1.18 0 0 1 1.67-.21 1.18 1.18 0 0 1 .16 1.66zm2.18.78 26.21-24.57a1.17 1.17 0 0 1 1.67.1 1.18 1.18 0 0 1-.12 1.67z"
    />
    <path
      fill="none"
      stroke="#603813"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m26.91 13 2.58-3.67a1.18 1.18 0 0 1 1.66-.25h0a1.18 1.18 0 0 1 .22 1.66l-22.56 28L18 25.63M25.55 14.94l.6-.85M19.06 24.17l5.73-8.16M32.96 17.91l.68-.66M34.58 16.33l2.06-2a1.18 1.18 0 0 1 1.68.06h0a1.18 1.18 0 0 1-.09 1.61L11 39.47l21.15-20.76"
    />
  </svg>
)
export default Chopstiks
