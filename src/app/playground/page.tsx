import DailyJams from '@/components/playground/DailyJams'
import LatestSong from '@/components/playground/LastestSong'
import Playlist from '@/components/playground/Playlist'
import Saitama from './Saitama'
import AnimeGrid from './AnimeGrid'

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
            Curious about what&apos;s spinning on my playlist right now? Check
            out my top tracks on Spotify, updated daily to keep you in the loop
            with my latest musical obsessions!
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
      <div className="py-5">
        {' '}
        <div className="mt-10 flex items-center justify-start gap-3">
          <Saitama className="size-8 fill-black dark:fill-gray-400" />
          <h1 className="font-lombok text-3xl font-bold tracking-tight">
            ANIME
          </h1>
        </div>
        <div className="my-7">
          <p>
            I fell in love with anime during the 2020 pandemic, starting with{' '}
            <span className="text-orange-500 underline underline-offset-2">
              One Punch Man
            </span>
            . The show&apos;s unique take on superheroes and its distinctive
            animation style amazed me.
          </p>

          <p>
            Since then, I&apos;ve explored various genres and now watch anime
            whenever I can. It&apos;s a wonderful way for me to unwind and enjoy
            a different kind of storytelling.
          </p>
          <p className="my-7">here are some of my favorite animes: </p>
          <AnimeGrid />
        </div>
      </div>
      <div className="py-5">
        <h1 className="font-lombok text-3xl font-bold tracking-tight">
          MANGA/MANHAWA
        </h1>
        <div className="my-7">
          <p>
            I usually don&apos;t read manga or manhwa, but I do occasionally
            check them out if I&apos;m really excited for a story or if
            something interesting catches my eye.
          </p>
          <p className="my-7">some manga/manhwa i read:</p>
        </div>
      </div>
    </section>
  )
}
export default page
