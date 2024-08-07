import * as React from 'react'
import { SVGProps } from 'react'

const Chopstiks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      className="origin-top-right group-hover/bentoi:animate-rotatePositive"
      fill="#333e48"
      d="M8.82 38.72 30.17 9.79a1.18 1.18 0 0 1 1.67-.21 1.18 1.18 0 0 1 .16 1.66Z"
    />
    <path
      className="origin-top-right group-hover/bentoi:animate-rotatePositive"
      fill="#603813"
      d="M8.82 39.22a.51.51 0 0 1-.31-.11.5.5 0 0 1-.09-.69L29.77 9.49a1.68 1.68 0 0 1 2.38-.3 1.69 1.69 0 0 1 .26 2.37L9.2 39a.48.48 0 0 1-.38.22ZM31.11 9.83H31a.72.72 0 0 0-.45.26L18.31 26.7l13.33-15.78a.65.65 0 0 0 .14-.49.66.66 0 0 0-.67-.6Z"
    />
    <path
      className="origin-top-right group-hover/bentoi:animate-rotateNegative"
      fill="#333e48"
      d="m11 39.5 26.21-24.57a1.17 1.17 0 0 1 1.67.1 1.18 1.18 0 0 1-.12 1.67Z"
    />
    <path
      className="origin-top-right group-hover/bentoi:animate-rotateNegative"
      fill="#603813"
      d="M11 40a.52.52 0 0 1-.38-.17.5.5 0 0 1 0-.7l26.25-24.56a1.68 1.68 0 0 1 1.22-.44 1.7 1.7 0 0 1 1.17.57 1.67 1.67 0 0 1-.18 2.38l-27.8 22.81A.56.56 0 0 1 11 40Zm27-24.87a.71.71 0 0 0-.46.17L22.47 29.42l16-13.11a.67.67 0 0 0-.4-1.18Z"
    />
  </svg>
)

export default Chopstiks
