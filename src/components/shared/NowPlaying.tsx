import { getNowPlaying } from '@/lib/Spotify'
import { Spotify } from '../Icons/socials/Spotify'

export default async function NowPlaying() {
  const nowPlayingData = await getNowPlaying()

  if (typeof nowPlayingData === 'string') {
    return (
      <div className="mb-4 flex w-full flex-row-reverse items-center justify-center space-x-0 text-sm sm:flex-row sm:space-x-2">
        {' '}
        <Spotify className="ml-auto size-4" />
        <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
          <p className="font-medium text-gray-800 dark:text-gray-200">
            {nowPlayingData === 'Currently Not Playing'
              ? 'Not  Listening'
              : 'Oopsie, No Tunes to Spin!'}
          </p>
          <p className="ml-1 text-gray-500 max-sm:hidden"> – Spotify</p>
        </div>
      </div>
    )
  }

  const { artist, songUrl, title } = nowPlayingData

  return (
    <div className="mb-4 flex w-full flex-row-reverse items-center justify-center space-x-0 text-sm sm:flex-row sm:space-x-2">
      <Spotify className="ml-auto size-4" />
      <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
        <a
          className="max-w-max truncate font-medium text-gray-800 dark:text-gray-200"
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <span className="mx-2 hidden text-gray-500 dark:text-gray-300 sm:block">
          {' – '}
        </span>
        <p className="max-w-max truncate text-gray-700 dark:text-gray-500">
          {artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  )
}
