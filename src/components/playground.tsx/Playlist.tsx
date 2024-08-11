'use client'

import { useTheme } from 'next-themes'

const Playlist = () => {
  const { resolvedTheme } = useTheme()
  return (
    <div className="xs:pr-40">
      {resolvedTheme == 'dark' ? (
        <iframe
          style={{ borderRadius: '14px', margin: '40px 0' }}
          src="https://open.spotify.com/embed/playlist/0x01FJoVPZrEJr9hGcE4L0?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <iframe
          style={{ borderRadius: '12px', margin: '40px 0' }}
          src="https://open.spotify.com/embed/playlist/0x01FJoVPZrEJr9hGcE4L0?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </div>
  )
}
export default Playlist
