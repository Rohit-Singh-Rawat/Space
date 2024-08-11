import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import blueLock from '@/../public/images/Manga/BlueLock.webp'
import kN8 from '@/../public/images/Manga/kaijuuNo8.webp'
import onePunchMan from '@/../public/images/Manga/onePunchMan.jpg'
import soloLeveling from '@/../public/images/Manga/SoloLeveling.jpg'
import React from 'react'

type MangaCardProps = {
  url: string
  image: StaticImageData
}

const MangaCard: React.FC<MangaCardProps> = ({ url, image }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="relative block h-52 overflow-hidden rounded-sm shadow-[6px_0px_10px_1px_#99a2b5] dark:shadow-[6px_0px_10px_1px_#1a202c]"
    >
      <Image
        alt="Manga cover"
        src={image}
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        className="rounded-sm"
      />
    </Link>
  )
}

const MangaShowCase: React.FC = () => {
  const mangaList = [
    {
      url: 'https://myanimelist.net/manga/121496/Solo_Leveling',
      image: soloLeveling,
    },
    {
      url: 'https://myanimelist.net/manga/44347/One_Punch-Man',
      image: onePunchMan,
    },
    {
      url: 'https://myanimelist.net/manga/114745/Blue_Lock',
      image: blueLock,
    },
    {
      url: 'https://myanimelist.net/manga/127907/Kaijuu_8-gou',
      image: kN8,
    },
  ]

  return (
    <div>
      <div className="mt-14 grid translate-y-2 grid-cols-2 gap-5 px-5 xs:grid-cols-4">
        {mangaList.map((manga, index) => (
          <MangaCard key={index} url={manga.url} image={manga.image} />
        ))}
      </div>
      <div className="h-4 w-full bg-gradient-to-b from-transparent via-white via-50% to-white backdrop-blur-[30px] dark:from-transparent dark:via-black dark:to-black"></div>
    </div>
  )
}

export default MangaShowCase
