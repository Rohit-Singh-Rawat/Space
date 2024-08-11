'use server'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=10`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=3`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    next: { revalidate: 3000 },
  })
  return response.json()
}

interface SpotifyArtist {
  name: string
  external_urls: {
    spotify: string
  }
}
interface SpotifyTrack {
  artists: SpotifyArtist[]
  external_urls: {
    spotify: string
  }
  name: string
  album: {
    images: { url: string }[]
  }
}

interface SpotifyTopTracksResponse {
  items: SpotifyTrack[]
}

interface SpotifyAlbum {
  images: { url: string }[]
  artists: SpotifyArtist[]
}

interface SpotifySong {
  item: {
    album: SpotifyAlbum
    artists: SpotifyArtist[]
    external_urls: {
      spotify: string
    }
    name: string
    duration_ms: number
  }
  is_playing: boolean
  progress_ms: number
}

export interface NowPlayingData {
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
  timePlayed: number
  timeTotal: number
  artistUrl: string
}

export const getNowPlaying = async (): Promise<NowPlayingData | string> => {
  try {
    const { access_token } = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-cache',
    })

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song')
    } else if (response.status === 204) {
      throw new Error('Currently Not Playing')
    }
    const song: SpotifySong = await response.json()

    const albumImageUrl = song.item.album.images[0].url
    const artist = song.item.artists.map((artist) => artist.name).join(', ')
    const isPlaying = song.is_playing
    const songUrl = song.item.external_urls.spotify
    const title = song.item.name
    const timePlayed = song.progress_ms
    const timeTotal = song.item.duration_ms
    const artistUrl = song.item.album.artists[0].external_urls.spotify

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    }
  } catch (error) {
    console.error('Error fetching currently playing song: ', error)
    return error instanceof Error ? error.message : 'An unknown error occurred'
  }
}

export const getTopTracks = async (): Promise<
  | {
      tracks: {
        artist: string
        songUrl: string
        title: string
        albumImageUrl: string
      }[]
    }
  | string
> => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 86400 },
    })
    if (!response.ok) {
      throw new Error('Unable to fetch top tracks')
    }

    const { items }: SpotifyTopTracksResponse = await response.json()

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((artist) => artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      albumImageUrl: track.album.images[0].url,
    }))

    return { tracks }
  } catch (error) {
    console.error('Error fetching top tracks: ', error)
    return error instanceof Error ? error.message : 'An unknown error occurred'
  }
}
interface SpotifyRecentlyPlayedItem {
  track: {
    name: string
    artists: SpotifyArtist[]
    album: SpotifyAlbum
    external_urls: {
      spotify: string
    }
  }
  played_at: string
}

interface SpotifyRecentlyPlayedResponse {
  items: SpotifyRecentlyPlayedItem[]
}

export const getRecentlyPlayed = async (): Promise<
  | {
      tracks: {
        artist: string
        songUrl: string
        title: string
        albumImageUrl: string
        playedAt: string
      }[]
    }
  | string
> => {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-cache',
    })

    if (!response.ok) {
      throw new Error('Unable to fetch recently played tracks')
    }

    const { items }: SpotifyRecentlyPlayedResponse = await response.json()

    const tracks = items.map((item) => ({
      artist: item.track.artists.map((artist) => artist.name).join(', '),
      songUrl: item.track.external_urls.spotify,
      title: item.track.name,
      albumImageUrl: item.track.album.images[0].url,
      playedAt: item.played_at,
    }))

    return { tracks }
  } catch (error) {
    console.error('Error fetching recently played tracks: ', error)
    return error instanceof Error ? error.message : 'An unknown error occurred'
  }
}
