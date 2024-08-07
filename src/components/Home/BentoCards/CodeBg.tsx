'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Segment {
  width: number
  color: string
}

interface CodeStructureProps {
  linesCount: number
}

const getRandomWidth = (): number => {
  const min = 5 // 5% minimum width
  const max = 23 // 20% maximum width
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomColor = (): string => {
  const colors = [
    'bg-orange-400',
    'bg-green-400',
    'bg-red-400',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-purple-400',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const CodeStructure: React.FC<CodeStructureProps> = ({ linesCount }) => {
  const [lines, setLines] = useState<Segment[][]>([])
  const verticalControls = useAnimation()
  const spanControls = useAnimation()

  useEffect(() => {
    const generateLines = () => {
      return Array.from({ length: linesCount }, () => {
        return Array.from(
          { length: Math.floor(Math.random() * 4) + 1 },
          () => ({
            width: getRandomWidth(),
            color: getRandomColor(),
          })
        )
      })
    }

    setLines(generateLines())

    const verticalAnimation = async () => {
      await verticalControls.start({
        y: ['0%', '-100%'],
        transition: { duration: 5, repeat: Infinity, repeatType: 'loop' },
      })
    }

    const spanAnimation = async () => {
      await spanControls.start({
        scaleX: [0, 1, 0],
        transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' },
      })
    }

    verticalAnimation()
    spanAnimation()
  }, [linesCount, verticalControls, spanControls])

  return (
    <motion.div
      className="overflow-hidden bg-transparent p-4"
      animate={verticalControls}
    >
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          className="mt-2 flex space-x-2"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        >
          {line.map((segment, segmentIdx) => (
            <motion.span
              key={segmentIdx}
              className={`block h-2 ${segment.color} rounded-md`}
              initial={{ scaleX: 0 }}
              animate={spanControls}
              style={{ width: `${segment.width}%`, transformOrigin: 'left' }}
            ></motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CodeStructure
