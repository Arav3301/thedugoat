'use client'

import { useQuery } from "convex/react"
import { api } from "../convex/_generated/api"
import PlayerCard from '../src/components/cards/PlayerCard'

export default function Home() {
  const players = useQuery(api.players.getAll)

  return (
    <main
      className="min-h-screen py-16 px-6"
      style={{ background: '#07090F' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div style={{ lineHeight: 1, marginBottom: -8 }}>
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 28,
            letterSpacing: 16,
            background: 'linear-gradient(90deg, #5a4a20, #8B6914, #5a4a20)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            ── THE DU ──
          </span>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{
            position: 'absolute', inset: -20,
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,215,0,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 120,
            letterSpacing: 12,
            lineHeight: 1,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE566 30%, #FFD700 60%, #C9A84C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(255,215,0,0.8)) drop-shadow(0 0 80px rgba(255,215,0,0.3))',
            display: 'block',
          }}>
            GOAT
          </span>
          <div style={{
            height: 3,
            background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
            marginTop: -8,
            opacity: 0.8,
          }} />
        </div>
        <p className="text-white/25 mt-4 uppercase" style={{ letterSpacing: 8, fontSize: 11, fontFamily: 'monospace' }}>
          Where Legends Are Drafted
        </p>
      </div>

      {/* Cards */}
      {players === undefined ? (
        <div className="flex justify-center items-center h-64">
          <p style={{ color: 'rgba(255,215,0,0.5)', fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 4 }}>
            LOADING LEGENDS...
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-10">
          {players.map((player: any) => (
            <PlayerCard
              key={player._id}
              player={player}
              onClick={() => console.log(player.name)}
            />
          ))}
        </div>
      )}
    </main>
  )
}