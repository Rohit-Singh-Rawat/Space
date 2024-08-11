import { getNowPlaying, getRecentlyPlayed } from '@/lib/Spotify'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default async function LatestSong() {
  let nowPlayingData = await getNowPlaying()

  if (typeof nowPlayingData === 'string') {
    const recentlyPlayedData = await getRecentlyPlayed()

    if (
      typeof recentlyPlayedData !== 'string' &&
      recentlyPlayedData.tracks.length > 0
    ) {
      const song = recentlyPlayedData.tracks[0]
      return (
        <div className="my-14 space-y-5">
          <p className="font-cath font-semibold">recently played</p>
          <div className="flex w-full flex-row items-center justify-center space-x-10 text-sm">
            <div className="relative size-24 min-w-24">
              <Image
                className={cn(
                  'size-20 min-w-20 rounded-full object-cover shadow-xl'
                )}
                src={song.albumImageUrl}
                width={300}
                height={300}
                alt={song.title}
              />
              <div className="absolute left-1/2 top-1/2 size-4 -translate-x-full -translate-y-full rounded-full bg-black"></div>
            </div>
            <div className="inline-flex w-full max-w-full flex-col justify-center truncate">
              <a
                className="max-w-max truncate font-medium text-gray-800 dark:text-gray-200"
                href={song.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {song.title}
              </a>

              <p className="max-w-max truncate text-gray-700 dark:text-gray-500">
                {song.artist ?? 'Spotify'}
              </p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="py-4 text-center text-gray-700">
          🎶 No tracks available right now. 🎶
        </div>
      )
    }
  }

  const { artist, songUrl, title, albumImageUrl, isPlaying } = nowPlayingData

  return (
    <div className="my-14 space-y-5">
      <p className="font-cath font-semibold">listening to</p>
      <div className="flex w-full flex-row items-center justify-center space-x-10 text-sm">
        <div className="relative size-24 min-w-24">
          <Image
            className={cn(
              'size-20 min-w-20 rounded-full object-cover shadow-xl',
              isPlaying ? 'animate-spinSlow' : ''
            )}
            src={albumImageUrl}
            width={300}
            height={300}
            alt={title}
          />
          <div className="absolute left-1/2 top-1/2 size-4 -translate-x-full -translate-y-full rounded-full bg-black"></div>
        </div>
        <div className="inline-flex w-full max-w-full flex-col justify-center truncate">
          <a
            className="max-w-max truncate font-medium text-gray-800 dark:text-gray-200"
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>

          <p className="max-w-max truncate text-gray-700 dark:text-gray-500">
            {artist ?? 'Spotify'}
          </p>
        </div>
      </div>
    </div>
  )
}
