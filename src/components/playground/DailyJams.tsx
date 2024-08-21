import { getTopTracks } from '@/lib/Spotify'
import Image from 'next/image'
import Link from 'next/link'

const DailyJams = async () => {
  const topTracksData = await getTopTracks()
  if (typeof topTracksData === 'string') {
    return <div></div>
  }
  const { tracks } = topTracksData
  return (
    <div className="py-14">
      <div className="custom-scroll flex h-36 w-full flex-nowrap gap-5 overflow-scroll">
        {tracks.map((track, index) => {
          return (
            <TrackCard
              albumImageUrl={track.albumImageUrl}
              artist={track.artist}
              songUrl={track.songUrl}
              title={track.title}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
interface TrackCardProps {
  title: string
  artist: string
  albumImageUrl: string
  songUrl: string
}
const TrackCard = ({
  title,
  artist,
  albumImageUrl,
  songUrl,
}: TrackCardProps) => {
  return (
    <Link
      href={songUrl}
      target="_blank"
      className="group relative h-36 w-28 min-w-28 rounded-lg"
    >
      <Image
        alt={title}
        src={albumImageUrl}
        width={300}
        height={300}
        className="h-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 z-10 overflow-hidden bg-black/40 p-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <p className="break-words font-neu text-xl font-semibold text-white">
          {title}
        </p>
        <p className="mt-2 break-words text-xs text-gray-300">{artist}</p>
      </div>
    </Link>
  )
}
export default DailyJams
