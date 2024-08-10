import * as React from 'react'
import { SVGProps } from 'react'
const MdxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    className="size-12 fill-inherit"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M20.95 7.68H3.05C2.47 7.68 2 8.16 2 8.74v6.53c0 .58.47 1.05 1.05 1.05h17.89c.58 0 1.05-.47 1.05-1.05V8.74c.01-.58-.46-1.06-1.04-1.06zm.21 7.58c0 .12-.09.21-.21.21H3.05c-.12 0-.21-.09-.21-.21V8.74c0-.12.09-.21.21-.21h17.89c.12 0 .21.09.21.21v6.52zM6.56 12l2.39-2.39v4.53h-.84v-2.49l-1.54 1.54-1.51-1.51v2.49h-.85V9.65L6.56 12zm7.25-.47.6.6-2.19 2.19-2.19-2.19.6-.6 1.18 1.18v-3.2h.84v3.19l1.16-1.17zm6.03-1.55-1.77 1.77 1.74 1.74-.6.6-1.74-1.74-1.74 1.74-.6-.6 1.74-1.74-1.77-1.77.6-.6 1.77 1.77 1.77-1.77.6.6z"
      className="fill-current"
    />
  </svg>
)
export default MdxIcon
