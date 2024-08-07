import { Github } from '@/components/Icons/GIthubBentoIcon'
import { GithubCalendar } from '@/components/shared/GithubCalendar'
import BentoCard from './BentoCard'
import Link from 'next/link'
import { getGitHubStats } from '@/lib/getGithubStats'
import { cn } from '@/lib/utils'

const GithubCard = () => {
  return (
    <BentoCard className="group/github col-span-2 row-span-2">
      <Link
        href={'https://github.com/Rohit-Singh-Rawat'}
        target="_blank"
        className="m-3 flex items-center gap-2"
      >
        <Github className="size-4" />
        <h3 className="bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text font-neu text-sm text-transparent">
          Github{' '}
        </h3>
      </Link>
      <div className="flex w-full flex-col items-center justify-center">
        {' '}
        <div className="custom__scrollbar h-32 max-h-32 w-36 max-w-36 overflow-hidden">
          <GithubCalendar username={'Rohit-Singh-Rawat'} />
        </div>
        <GithubStats />
      </div>
    </BentoCard>
  )
}

const GithubStats = async () => {
  const { followers, following, totalStars, totalIssues, totalPRs } =
    await getGitHubStats()
  const statsArray = [
    { label: 'Followers', value: followers },
    { label: 'Following', value: following },
    { label: 'Stars', value: totalStars },
    { label: 'Issues', value: totalIssues },
    { label: 'PRs', value: totalPRs },
  ]
  return (
    <div className="flex w-full flex-col gap-3">
      {statsArray.map((stat, index) => {
        return (
          <div
            key={index}
            className={cn(
              'flex w-full flex-col',
              index % 2 == 0 ? 'items-start' : 'items-end'
            )}
          >
            <div
              className={cn(
                'githubStats p-3',
                index % 2 == 0
                  ? '-translate-x-5 rounded-r-full pr-4 text-right transition-all duration-300 ease-in group-hover/github:-translate-x-2'
                  : 'translate-x-5 rounded-l-full pl-4 transition-all duration-300 ease-in group-hover/github:translate-x-2'
              )}
              key={index}
            >
              <span className="pr-3 text-[#939393] dark:text-[#777777]">
                {stat.label}
              </span>
              {stat.value}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default GithubCard
