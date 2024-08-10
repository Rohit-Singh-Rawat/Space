import * as React from 'react'
import { motion, SVGMotionProps } from 'framer-motion'

type PathProps = SVGMotionProps<SVGPathElement>

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    className="stroke-black dark:stroke-white"
    strokeLinecap="round"
    {...props}
  />
)

interface HamburgerProps extends React.SVGProps<SVGSVGElement> {
  isOpen: boolean
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, ...props }) => (
  <svg width="23" height="23" viewBox="0 0 23 23" {...props}>
    <Path
      variants={{
        closed: { d: 'M 7 2.5 L 18 2.5' },
        open: { d: 'M 3 16.5 L 17 2.5' },
      }}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
    />
    <Path
      d="M 2 9.423 L 4 9.423"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
    />
    <Path
      d="M 8 9.423 L 20 9.423"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.1 }}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
    />
    <Path
      variants={{
        closed: { d: 'M 5 16.346 L 16 16.346' },
        open: { d: 'M 3 2.5 L 17 16.346' },
      }}
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
    />
  </svg>
)
