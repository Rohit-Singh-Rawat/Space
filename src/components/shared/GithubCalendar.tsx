'use client'
import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type GitHubCalendarComponentProps = {
  username: string
}

const GitHubCalendarComponent: React.FC<GitHubCalendarComponentProps> = ({
  username,
}) => {
  const [loading, setLoading] = useState(true)

  const selectLast8Weeks = (data: Activity[]) => {
    const currentDate = new Date()
    const fiftySixDaysAgo = new Date()
    fiftySixDaysAgo.setDate(currentDate.getDate() - 56)

    const filteredData = data.filter((activity) => {
      const date = new Date(activity.date)
      return date >= fiftySixDaysAgo && date <= currentDate
    })

    setLoading(false)
    return filteredData
  }

  return (
    <div className="relative">
      <div
        className={`transition-all delay-300 duration-700 ${loading ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}
        style={{ transitionProperty: 'filter, opacity' }}
      >
        {loading && (
          <div className="grid w-fit grid-cols-9 grid-rows-7 gap-1">
            {Array.from({ length: 7 * 9 }, (_, i) => (
              <div key={i} className="size-3 rounded-[2px] bg-gray-800"></div>
            ))}
          </div>
        )}
        <GitHubCalendar
          style={{ overflow: 'hidden', opacity: loading ? 0 : 1 }}
          username={username}
          transformData={selectLast8Weeks}
          hideColorLegend
          hideMonthLabels
          hideTotalCount
        />
      </div>
    </div>
  )
}

export { GitHubCalendarComponent as GithubCalendar }
