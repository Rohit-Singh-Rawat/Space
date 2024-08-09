export interface WakatimeRes {
  data: {
    decimal: string
    digital: string
    is_up_to_date: boolean
    percent_calculated: number
    range: {
      end: string
      end_date: string
      end_text: string
      start: string
      start_date: string
      start_text: string
      timezone: string
    }
    text: string
    timeout: number
    total_seconds: number
  }
}

export const fetchWakatimeStats = async (): Promise<{ seconds: number }> => {
  try {
    const res = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY || '').toString('base64')}`,
        },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: WakatimeRes = await res.json()
    console.log(data)
    return {
      seconds: data.data.total_seconds,
    }
  } catch (error) {
    console.error('Fetch failed: ', error)
    throw error
  }
}

export { fetchWakatimeStats as getCodingHrs }
