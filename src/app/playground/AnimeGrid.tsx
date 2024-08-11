import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import erased from '../../../public/images/Anime/erased.jpg'
import futureDiary from '../../../public/images/Anime/futureDiary.jpg'
import haikyuu from '../../../public/images/Anime/Haikyuu.jpg'
import iWantToEatYourPancreas from '../../../public/images/Anime/iWantToEatYourPancrease.jpeg'
import jjk from '../../../public/images/Anime/jjk.jpg'
import naruto from '../../../public/images/Anime/Naruto.jpg'
import onePunchMan from '../../../public/images/Anime/onePunchMan.jpg'
import promiseNeverland from '../../../public/images/Anime/PromiseNeverLand.jpg'
import silentVoice from '../../../public/images/Anime/silentVoice.webp'
import steinsGate from '../../../public/images/Anime/steinsGate.jpg'
import tokyoGhoul from '../../../public/images/Anime/TokyoGhoul.jpg'
import yourLieInApril from '../../../public/images/Anime/YourLieInApril.jpg'
import React from 'react'

type AnimeGridProps = {}

const AnimeGrid: React.FC<AnimeGridProps> = () => {
  const animeList = [
    {
      url: 'https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso',
      title: 'Shigatsu wa Kimi no Uso',
      subtitle: 'Your Lie In April',
      image: yourLieInApril,
    },
    {
      url: 'https://myanimelist.net/anime/36098/Kimi_no_Suizou_wo_Tabetai',
      title: 'Kimi no Suizou wo Tabetai',
      subtitle: 'I Want To Eat Your Pancreas',
      image: iWantToEatYourPancreas,
    },
    {
      url: 'https://myanimelist.net/anime/22319/Tokyo_Ghoul',
      title: 'Tokyo Ghoul',
      image: tokyoGhoul,
    },
    {
      url: 'https://myanimelist.net/anime/31043/Boku_dake_ga_Inai_Machi',
      title: 'Boku dake ga Inai Machi',
      subtitle: 'Erased',
      image: erased,
    },
    {
      url: 'https://myanimelist.net/anime/28851/Koe_no_Katachi',
      title: 'Koe no Katachi',
      subtitle: 'A Silent Voice',
      image: silentVoice,
    },
    {
      url: 'https://myanimelist.net/anime/10620/Mirai_Nikki_TV',
      title: 'Mirai Nikki',
      subtitle: 'The Future Diary',
      image: futureDiary,
    },
    {
      url: 'https://myanimelist.net/anime/20583/Haikyuu',
      title: 'Haikyuu',
      image: haikyuu,
    },
    {
      url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
      title: 'Jujutsu Kaisen',
      image: jjk,
    },
    {
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      title: 'Naruto Shippuuden',
      image: naruto,
    },
    {
      url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
      title: 'One Punch Man',
      image: onePunchMan,
    },
    {
      url: 'https://myanimelist.net/anime/37779/Yakusoku_no_Neverland',
      title: 'Yakusoku no Neverland',
      subtitle: 'The Promise NeverLand',
      image: promiseNeverland,
    },
    {
      url: 'https://myanimelist.net/anime/9253/Steins_Gate',
      title: 'Steins;Gate',
      image: steinsGate,
    },
  ]

  return (
    <div className="my-14 grid gap-5 xs:grid-cols-2">
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.title}
          url={anime.url}
          title={anime.title}
          subtitle={anime.subtitle}
          image={anime.image}
        />
      ))}
    </div>
  )
}
type AnimeCardProps = {
  url: string
  title: string
  subtitle?: string
  image: StaticImageData
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  url,
  title,
  subtitle,
  image,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="group relative h-36 overflow-hidden rounded-lg"
    >
      <div className="absolute left-0 top-0 size-full">
        {' '}
        <Image
          alt={title}
          src={image}
          width={300}
          placeholder="blur"
          height={300}
          className="size-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-end overflow-hidden bg-black/40 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <p className="translate-y-6 break-words font-neu text-xl font-semibold opacity-0 blur transition-all duration-300 ease-linear group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0">
          {title}
        </p>
        {subtitle && (
          <p className="translate-y-6 break-words font-neu text-sm font-semibold opacity-0 blur transition-all duration-300 ease-linear group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0">
            {subtitle}
          </p>
        )}{' '}
      </div>
    </Link>
  )
}

export default AnimeGrid
