import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import ConfigPanel from './components/ConfigPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Subtle vignette */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.6))]" />
      </div>

      <Navbar />
      <Hero />
      <FeatureCards />
      <ConfigPanel />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-400 text-sm">© 2025 Neon Arena. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
