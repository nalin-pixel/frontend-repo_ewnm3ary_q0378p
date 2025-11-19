import React from 'react'
import { SlidersHorizontal, Sparkles } from 'lucide-react'

const Option = ({ label, value }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-slate-300 text-sm">{label}</span>
    <span className="text-white text-sm font-semibold">{value}</span>
  </div>
)

export default function ConfigPanel() {
  return (
    <section className="relative pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center ring-1 ring-white/10 shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                  <SlidersHorizontal size={20} />
                </div>
                <div className="text-white font-semibold">Match Configuration</div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                  <Option label="Region" value="NA-East" />
                  <Option label="Mode" value="Competitive" />
                  <Option label="Map" value="Neon District" />
                  <Option label="Max Players" value="5v5" />
                </div>
                <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                  <Option label="Server Tick" value="128 Hz" />
                  <Option label="Anticheat" value="Enabled" />
                  <Option label="Voice" value="Squad Only" />
                  <Option label="Spectators" value="On" />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white font-semibold px-6 py-3 shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:brightness-110 transition">
                  Queue Up
                </button>
                <button className="rounded-xl bg-white/5 text-slate-200 border border-white/10 font-semibold px-6 py-3 hover:bg-white/10 transition">
                  Save Preset
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white flex items-center justify-center ring-1 ring-white/10 shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                <Sparkles size={20} />
              </div>
              <div className="text-white font-semibold">Performance Stats</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Latency</span>
                  <span className="text-white font-semibold">18ms</span>
                </div>
                <div className="mt-2 h-2 rounded bg-white/10">
                  <div className="h-2 w-2/3 rounded bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                </div>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">FPS</span>
                  <span className="text-white font-semibold">240</span>
                </div>
                <div className="mt-2 h-2 rounded bg-white/10">
                  <div className="h-2 w-5/6 rounded bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
                </div>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Packet Loss</span>
                  <span className="text-white font-semibold">0.1%</span>
                </div>
                <div className="mt-2 h-2 rounded bg-white/10">
                  <div className="h-2 w-1/6 rounded bg-gradient-to-r from-emerald-400 to-cyan-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
