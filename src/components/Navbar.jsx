import React from 'react'
import { Menu, Gamepad2, Search } from 'lucide-react'

const NavItem = ({ label }) => (
  <button className="text-slate-200/80 hover:text-white transition-colors px-3 py-2 text-sm">
    {label}
  </button>
)

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 shadow-[0_0_30px_rgba(59,130,246,0.6)] ring-1 ring-white/10 flex items-center justify-center">
              <Gamepad2 className="text-white" size={22} />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold tracking-tight text-lg">NEON ARENA</div>
              <div className="text-xs text-slate-400 -mt-0.5">Esports Collective</div>
            </div>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavItem label="Home" />
            <NavItem label="Tournaments" />
            <NavItem label="Teams" />
            <NavItem label="News" />
            <NavItem label="Store" />
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-slate-300">
              <Search size={16} className="mr-2 text-slate-400" />
              <input placeholder="Search" className="bg-transparent outline-none placeholder:text-slate-500 text-sm w-32" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white text-sm font-semibold px-4 py-2 shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:brightness-110 transition">
              Join Now
            </button>
            <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
              <Menu className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
