// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'
import Confetti from 'react-confetti'
import HeartParticles from '@app/app/components/heartparticles' // Pastikan path ini benar

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Gagal memutar audio:', error)
          })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Data foto & caption
  const photos = [
    '/images/5.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/1.jpg',
    '/images/6.jpg',
    '/images/8.png',
    '/images/9.png',
    '/images/10.png',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.png',
  ]

  const captions = [
    "Pertama kali ketemu, aku langsung jatuh hati.",
    "Masih ingat senyummu.",
    "Habis sakit langsung foto foto di kaca.",
    "Minum mixue bareng, selalu seru dan bikin kangen.",
    "Sama sama lagi sakit tapi nyempetin buat foto.",
    "Mirror random, tapi selalu jadi kenangan manis.",
    "Main pertama kali diluar KKN.",
    "Ceritanya sih ngurus yang sakit, padahal sendiri juga lagi sakit wkwkwk.",
    "Otw ke gunung.",
    "Walaupun sakit tetep selfie.",
    "Pertama kali ketemu ayah ibu langsung.",
    "Bikin kolase foto.",
    "Walau tumbang tetep senyum.",
    "Pose Favorit.",
    "Yang ngurusnya tumbang juga akhirnya diurus balik wkwkwk.",
  ]

  // Pesan-pesan romantis
  const messages = [
    "Aku tak pernah pandai menjelaskan, tapi berbicara denganmu selalu terasa seperti pulang, dan kau mampu menyembuhkan segala suasana yang ada di hatiku.",
    "Kamu adalah alasan kenapa senyumku selalu muncul tanpa diminta.",
    "Aku tidak punya banyak orang di kehidupanku, jadi terima kasih telah meluangkan waktunya untuk sekedar cerita dan tertawa bersamaku.",
    "Setelah banyak yang hilang, Tuhan tiba tiba memunculkan satu sosok tanpa aba aba, seseorang yang bikin aku berdoa diam diam 'kalau ini mimpi, jangan bangunkan dulu'.",
    "Untukmu, doaku seluas langit, Terlepas dari terwujud atau tidak terwujud, akan selalu ada yang menginginkan agar kamu senantiasa diliputi hal hal baik.",
    "Aku merasa sangat dihargai. Semoga aku juga bisa membuat kamu merasa dihargai.",
    "Kalau mau cerita, aku ada di sini. Tapi kalau butuh waktu sendiri, take your time.",
    "Terima kasih sudah berkenan menerima ketidaksempurnaanku. Aku usahakan jadi lebih baik lagi."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col items-center justify-start p-6 relative overflow-hidden">
      {/* 🔴 Efek hati melayang terus-menerus */}
      <HeartParticles />

      {/* Audio */}
      <audio ref={audioRef} src="/music/penjaga hati.mp3" />

      {/* 🎉 Partikel hati konfeti — hanya saat musik diputar */}
      {isPlaying && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1000}
          height={typeof window !== 'undefined' ? window.innerHeight : 600}
          recycle={false}
          numberOfPieces={50}
          gravity={0.1}
          colors={['#FF69B4', '#FF1493', '#DB7093', '#FFC0CB']}
          initialVelocityY={-20}
          onConfettiComplete={() => {}}
          confettiSource={{
            x: (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2,
            y: (typeof window !== 'undefined' ? window.innerHeight : 600) / 2,
            w: 0,
            h: 0,
          }}
          drawShape={(ctx) => {
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.bezierCurveTo(-10, -15, 10, -15, 0, 0)
            ctx.bezierCurveTo(10, 15, -10, 15, 0, 0)
            ctx.closePath()
            ctx.fill()
          }}
        />
      )}

      {/* Header + Foto Utama */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-10 mt-8"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl mx-auto mb-6"
        >
          <Image
            src="/images/7.jpg"
            alt="Kita berdua"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-rose-800 mb-4"
        >
          Untuk orang yang aku sayang ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-gray-700 max-w-md mx-auto"
        >
          Setiap momen bersamamu adalah hadiah terindah dalam hidupku.
        </motion.p>
      </motion.div>

      {/* Tombol Musik */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="mt-4 p-3 rounded-full bg-rose-500 text-white shadow-lg flex items-center gap-2 z-10"
        aria-label={isPlaying ? 'Jeda lagu' : 'Putar lagu'}
      >
        {isPlaying ? '⏸️' : '▶️'} Lagu Kita
      </motion.button>

      {/* Bagian Kenangan Kita */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full mt-12 px-4"
      >
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-8">Kenangan Kita ❤️</h2>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)',
              }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer group"
            >
              {/* Bingkai Photo Booth */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-4 border-white p-2 relative group-hover:shadow-xl transition-shadow duration-300">
                {/* Foto dengan object-contain — tidak terpotong */}
                <div className="relative w-full min-h-[200px] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Foto kenangan ${idx + 1}`}
                    fill
                    className="object-contain p-2 max-w-full max-h-full"
                    priority={idx === 0}
                  />
                </div>
                <div className="mt-3 p-2 bg-rose-50 text-gray-700 text-sm rounded-b-lg">
                  {captions[idx]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bagian Pesan untukmu */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-full mt-16 px-4 pb-12"
      >
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-8">Pesan untukmu 💖</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + idx * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-rose-100"
            >
              <p className="text-gray-800 text-lg italic">"{msg}"</p>
              <div className="text-right mt-2 text-rose-600 font-medium">— Untukmu ❤️</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}