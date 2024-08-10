import { cath } from '@/lib/font'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface PolaroidPhotoProps {
  imageSrc: StaticImageData
  altText: string
  text?: string
  rotation?: number
}

const PolaroidPhoto: FC<PolaroidPhotoProps> = ({
  imageSrc,
  altText,
  text = '',
  rotation = 6,
}) => {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
      className={`polaroid group h-[215px] w-40 rounded-[1px] bg-white p-2 shadow-md transition-all duration-200 hover:scale-105 dark:shadow-md dark:shadow-emerald-900`}
    >
      <Image
        width={300}
        height={250}
        alt={altText}
        placeholder="blur"
        src={imageSrc}
        className="size-40 object-cover grayscale transition-all delay-150 duration-300 group-hover:grayscale-0"
      />
      {text && (
        <p
          className={cn(
            'mt-2 text-center font-bold text-black',
            cath.className
          )}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export default PolaroidPhoto
