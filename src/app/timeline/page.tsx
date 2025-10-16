// app/timeline/page.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const events = [
  { date: 'Jan 2022', title: 'Pertama kali ketemu', desc: 'Di kafe kecil itu...' },
  { date: 'Mar 2022', title: 'Kencan pertama', desc: 'Makan malam di tepi danau' },
  { date: 'Des 2022', title: 'Liburan pertama', desc: 'Bali, matahari terbenam yang tak terlupakan' },
]

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-rose-800 mb-12">Perjalanan Kita</h1>
      <div ref={ref} className="relative max-w-2xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={i}
            style={{ x }}
            className="mb-12 flex items-center"
          >
            <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white mr-4">
              {i + 1}
            </div>
            <div className="bg-rose-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p>{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}