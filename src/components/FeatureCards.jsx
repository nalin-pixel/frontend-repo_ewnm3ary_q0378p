import React from 'react'
import { Cpu, Trophy, Headphones, ShoppingBag } from 'lucide-react'

const Card = ({ icon: Icon, title, text }) => (
  <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{
      background: 'radial-gradient(circle at 20% -10%, rgba(59,130,246,0.25), transparent 30%), radial-gradient(circle at 120% 120%, rgba(168,85,247,0.25), transparent 30%)'
    }} />
    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    <div className="relative z-10">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] ring-1 ring-white/10">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-white font-bold text-lg">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{text}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <button className="mt-4 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">Explore →</button>
    </div>
    <div className="absolute -inset-[1px] rounded-2xl ring-2 ring-transparent group-hover:ring-cyan-400/60 transition shadow-[0_0_40px_rgba(34,211,238,0.35)] pointer-events-none" />
  </div>
)

export default function FeatureCards() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card icon={Cpu} title="Pro Performance" text="Low-latency networking, adaptive tick rates, and anti-cheat to keep every frame fair." />
          <Card icon={Trophy} title="Tournaments" text="Host and join high-stakes brackets with live standings and highlight reels." />
          <Card icon={Headphones} title="Comms Hub" text="3D spatial audio lounges with push-to-talk and squad channels." />
          <Card icon={ShoppingBag} title="Gear Store" text="Premium skins, peripherals, and limited drops with neon gloss." />
        </div>
      </div>
    </section>
  )
}
