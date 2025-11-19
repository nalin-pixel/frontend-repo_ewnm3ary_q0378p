import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background gradient glows */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-40 h-[60rem] w-[60rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 -left-40 h-[60rem] w-[60rem] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)] blur-3xl" />

        {/* HUD grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }} />
      </div>

      {/* 3D Spline Scene */}
      <div className="relative h-[70vh] md:h-[75vh]">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Overlay accents */}
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="w-full h-48 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
      </div>

      {/* Heading content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              <span className="text-xs tracking-widest uppercase text-slate-300">Live Now • Season XIV</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Enter the Neon Arena
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg md:text-xl">
              A hyper-polished esports hub with a cinematic, cyberpunk edge. Compete, spectate, and gear up — all in one immersive space.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white font-semibold px-6 py-3 shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:brightness-110 transition">
                Start Matchmaking
              </button>
              <button className="rounded-xl bg-white/5 text-slate-200 border border-white/10 font-semibold px-6 py-3 hover:bg-white/10 transition">
                Watch Live
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
