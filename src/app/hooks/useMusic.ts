// app/hooks/useMusic.ts
import { useState, useEffect, useRef } from 'react'

export const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Ambil audio dari DOM (dari layout)
    const audio = document.getElementById('background-music') as HTMLAudioElement
    audioRef.current = audio

    // Cek apakah sebelumnya musik diputar
    const wasPlaying = localStorage.getItem('musicPlaying') === 'true'
    setIsPlaying(wasPlaying)

    if (wasPlaying && audio) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Gagal memutar otomatis:', error)
          setIsPlaying(false)
          localStorage.setItem('musicPlaying', 'false')
        })
      }
    }

    // Event listener untuk pause/play dari luar
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Jangan pause saat tab background — biar tetap nyala!
        // audio.pause() ❌ JANGAN LAKUKAN INI
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      localStorage.setItem('musicPlaying', 'false')
    } else {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Gagal memutar:', error)
        })
      }
      localStorage.setItem('musicPlaying', 'true')
    }
    setIsPlaying(!isPlaying)
  }

  return { isPlaying, toggleMusic, audioRef }
}