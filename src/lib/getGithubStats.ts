interface GitHubData {
  followers: number
  following: number
  totalStars: number
  totalPRs: number
  totalIssues: number
}

interface RepositoryNode {
  pullRequests: {
    totalCount: number
    nodes: { merged: boolean }[]
  }
  issues: {
    totalCount: number
  }
  stargazers: {
    totalCount: number
  }
}

const fetchGitHubData = async (): Promise<GitHubData> => {
  const query = `
    query ($username: String!) {
      user(login: $username) {
        followers {
          totalCount
        }
        following {
          totalCount
        }
        starredRepositories {
          totalCount
        }
        pullRequests(first: 100) {
          totalCount
          nodes {
            merged
          }
        }
        issues {
          totalCount
        }
        repositories(first: 100) {
          totalCount
          nodes {
            pullRequests(first: 100) {
              totalCount
              nodes {
                merged
              }
            }
            issues {
              totalCount
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `

  const variables = { username: 'Rohit-Singh-Rawat' }

  // You can also cache and revalidate data in fetch instead of unstable_cache

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 21600 },
  })

  const data = await response.json()
  if (data.errors) {
    throw new Error('Failed to fetch GitHub data')
  }

  let totalPRs = data.data.user.pullRequests.totalCount
  let totalIssues = data.data.user.issues.totalCount
  let totalStars = 0

  data.data.user.repositories.nodes.forEach((repo: RepositoryNode) => {
    totalPRs += repo.pullRequests.totalCount
    totalIssues += repo.issues.totalCount
    totalStars += repo.stargazers.totalCount
  })

  return {
    followers: data.data.user.followers.totalCount,
    following: data.data.user.following.totalCount,
    totalStars,
    totalPRs,
    totalIssues,
  }
}

export { fetchGitHubData as getGitHubStats }
