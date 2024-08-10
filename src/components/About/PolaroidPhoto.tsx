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
      className={`polaroid group h-[215px] w-40 bg-white p-2 shadow-md transition-all duration-200 hover:scale-105`}
    >
      <Image
        width={300}
        height={250}
        alt={altText}
        placeholder="blur"
        src={imageSrc}
        className="size-40 object-cover grayscale transition-all delay-150 duration-300 group-hover:grayscale-0"
      />
      {text && <p className="mt-2 text-center">{text}</p>}
    </div>
  )
}

export default PolaroidPhoto
