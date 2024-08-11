import DailyJams from '@/components/playground.tsx/DailyJams'
import LatestSong from '@/components/playground.tsx/LastestSong'
import Playlist from '@/components/playground.tsx/Playlist'

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <h1 className="text-4xl font-bold tracking-tight">playground</h1>
      <div>
        <h1 className="mt-10 font-lombok text-3xl font-bold tracking-tight">
          MUSIC
        </h1>
        <div className="my-7 space-y-3">
          {' '}
          <p>
            Music has always been a heartbeat of my life, energizing me through
            work, workouts, and relaxation.
          </p>
          <p>
            My playlist ranges from international rap and classical Indian
            melodies to Punjabi rhythms and traditional Kumaoni and Garhwali
            songs from my motherland, Uttarakhand.
          </p>
          <p>
            Each track evokes memories and emotions, making every day a rich,
            musical adventure.
          </p>
          <div>
            <LatestSong />
          </div>
        </div>
        <h1 className="mt-10 text-3xl font-bold tracking-tight">Daily Jams</h1>
        <div className="my-7 space-y-3">
          {' '}
          <p>
            Curious about what’s spinning on my playlist right now? Check out my
            top tracks on Spotify, updated daily to keep you in the loop with my
            latest musical obsessions!
          </p>
          <DailyJams />{' '}
        </div>
        <h1 className="mt-10 text-3xl font-bold tracking-tight">
          Timeless Tunes
        </h1>
        <div className="my-7 space-y-3">
          {' '}
          <p>
            Discover my all-time favorite collection, a playlist that I can
            always turn to:
          </p>
          <Playlist />
        </div>
      </div>
    </section>
  )
}
export default page
