'use client'

import { motion } from 'framer-motion'
import { Player } from '@/src/data/types'

interface GoatCardProps {
  player: Player
  onClick?: () => void
}

function getStats(player: Player) {
  const isBowler = player.ratings.bowling > player.ratings.batting
  const isAllRounder = Math.abs(player.ratings.bowling - player.ratings.batting) < 10
  const isWK = player.role.toLowerCase().includes('wicket')

  if (isBowler && !isAllRounder) {
    const wkts = (player.stats.test.wickets ?? 0) + (player.stats.odi.wickets ?? 0)
    const style = player.bowling_style?.toLowerCase().includes('spin') ? 'SPIN'
      : player.bowling_style?.toLowerCase().includes('medium') ? 'MED' : 'FAST'
    return [
      { label: 'WKTS', value: String(wkts) },
      { label: 'STYLE', value: style },
      { label: 'PWR', value: String(player.ratings.bowling) },
    ]
  }
  if (isWK) {
    const runs = (player.stats.test.runs ?? 0) + (player.stats.odi.runs ?? 0)
    const hundreds = (player.stats.test.hundreds ?? 0) + (player.stats.odi.hundreds ?? 0)
    return [
      { label: 'RUNS', value: runs > 999 ? `${(runs / 1000).toFixed(1)}k` : String(runs) },
      { label: '100s', value: String(hundreds) },
      { label: 'PWR', value: String(player.ratings.batting) },
    ]
  }
  if (isAllRounder) {
    const runs = (player.stats.test.runs ?? 0) + (player.stats.odi.runs ?? 0)
    const wkts = (player.stats.test.wickets ?? 0) + (player.stats.odi.wickets ?? 0)
    return [
      { label: 'RUNS', value: runs > 999 ? `${(runs / 1000).toFixed(1)}k` : String(runs) },
      { label: 'WKTS', value: String(wkts) },
      { label: 'PWR', value: String(player.ratings.batting) },
    ]
  }
  const runs = (player.stats.test.runs ?? 0) + (player.stats.odi.runs ?? 0)
  const hundreds = (player.stats.test.hundreds ?? 0) + (player.stats.odi.hundreds ?? 0)
  return [
    { label: 'RUNS', value: runs > 999 ? `${(runs / 1000).toFixed(1)}k` : String(runs) },
    { label: '100s', value: String(hundreds) },
    { label: 'PWR', value: String(player.ratings.batting) },
  ]
}

export default function GoatCard({ player, onClick }: GoatCardProps) {
  const stats = getStats(player)
  const initials = player.name.split(' ').filter(n => n.length > 0).map(n => n[0]).join('')

  return (
    <motion.div
      className="relative cursor-pointer select-none flex-shrink-0"
      style={{ width: 230, height: 360 }}
      initial={{ opacity: 0, y: 60, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -20, scale: 1.06, transition: { duration: 0.3, ease: 'easeOut' } }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
    >
      {/* God aura */}
      <motion.div className="absolute rounded-xl"
        style={{ inset: -20, background: 'radial-gradient(ellipse at 50% 50%, rgba(255,215,0,0.3) 0%, transparent 65%)', filter: 'blur(18px)' }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div className="absolute rounded-xl"
        style={{ inset: -35, background: 'radial-gradient(ellipse at 50% 50%, rgba(255,180,0,0.15) 0%, transparent 60%)', filter: 'blur(35px)' }}
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
      />
      <motion.div className="absolute rounded-xl"
        style={{ inset: -5, border: '1px solid rgba(255,215,0,0.12)' }}
        animate={{ opacity: [0.15, 0.45, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      />
      <motion.div className="absolute rounded-xl"
        style={{ inset: -2, border: '1px solid rgba(255,215,0,0.28)' }}
        animate={{ opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />

      {/* Main card */}
      <div className="absolute inset-0 rounded-xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0E0A00 0%, #000000 55%, #050300 100%)' }}>

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        />

        {/* Top radial burst */}
        <div className="absolute" style={{ top: -60, left: '50%', transform: 'translateX(-50%)', width: 340, height: 340, background: 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

        {/* Gold sweep */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(108deg, transparent 25%, rgba(255,215,0,0.03) 42%, rgba(255,255,255,0.11) 50%, rgba(255,215,0,0.03) 58%, transparent 75%)', backgroundSize: '300% 100%' }}
          animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        />

        {/* CROWN SVG */}
        <svg className="absolute z-20" style={{ top: 10, left: '50%', transform: 'translateX(-50%)' }} width="72" height="36" viewBox="0 0 72 36" fill="none">
          <rect x="6" y="25" width="60" height="7" rx="1.5" fill="#FFD700" opacity="0.95" />
          <polygon points="6,25 6,10 20,20" fill="#FFD700" opacity="0.85" />
          <polygon points="22,25 36,2 50,25" fill="#FFD700" opacity="1" />
          <polygon points="66,25 66,10 52,20" fill="#FFD700" opacity="0.85" />
          <circle cx="6" cy="10" r="3.5" fill="#FFD700" />
          <circle cx="36" cy="2" r="4.5" fill="#FFFFFF" opacity="0.95" />
          <circle cx="66" cy="10" r="3.5" fill="#FFD700" />
          <circle cx="20" cy="20" r="2" fill="#FFF5A0" opacity="0.85" />
          <circle cx="52" cy="20" r="2" fill="#FFF5A0" opacity="0.85" />
          <circle cx="36" cy="2" r="1.8" fill="#FFFFFF" opacity="0.5" />
        </svg>

        {/* Badge */}
        <div className="absolute z-20" style={{ top: 52, left: 12 }}>
          <span className="text-[9px] font-bold tracking-[3px] px-2 py-1 rounded uppercase"
            style={{ background: 'rgba(255,215,0,0.12)', color: '#FFE566', border: '1px solid rgba(255,215,0,0.55)' }}>
            ⚡ G.O.A.T
          </span>
        </div>

        {/* Card number */}
        <div className="absolute z-20" style={{ top: 52, right: 12 }}>
          <span className="text-[9px] text-white/20 font-mono">#{player.card.card_number}</span>
        </div>

        {/* Art zone */}
        <div className="relative flex flex-col items-center justify-center" style={{ marginTop: 84, height: 160 }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 60%)' }} />

          {/* Avatar */}
          <motion.div className="relative z-10 flex items-center justify-center rounded-full"
            style={{ width: 100, height: 100, border: '3px solid #FFD700', background: 'radial-gradient(circle at 35% 35%, rgba(255,215,0,0.18), transparent 60%)' }}
            animate={{ boxShadow: [
              '0 0 25px rgba(255,215,0,0.5), 0 0 55px rgba(255,215,0,0.12), inset 0 0 22px rgba(255,215,0,0.07)',
              '0 0 45px rgba(255,215,0,0.9), 0 0 90px rgba(255,215,0,0.25), inset 0 0 32px rgba(255,215,0,0.14)',
              '0 0 25px rgba(255,215,0,0.5), 0 0 55px rgba(255,215,0,0.12), inset 0 0 22px rgba(255,215,0,0.07)',
            ]}}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32, fontWeight: 900, color: '#FFD700', letterSpacing: 3, textShadow: '0 0 22px rgba(255,215,0,0.95)' }}>
              {initials}
            </span>
          </motion.div>

          {/* Nation */}
          <div className="mt-2 text-[11px] font-bold tracking-[6px] z-10" style={{ color: 'rgba(255,215,0,0.65)' }}>
            {player.nation_code}
          </div>

          {/* Gold particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: i % 3 === 0 ? 4 : 3, height: i % 3 === 0 ? 4 : 3, background: i % 2 === 0 ? '#FFD700' : '#FFF5A0', left: `${8 + i * 9}%`, top: `${40 + (i % 4) * 12}%` }}
              animate={{ y: [0, -60, -120], x: [0, i % 2 === 0 ? 20 : -20], opacity: [0, 1, 0], scale: [0, 1.4, 0] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.3, ease: 'easeOut' }}
            />
          ))}
        </div>

        {/* Animated divider */}
        <motion.div className="absolute left-4 right-4" style={{ bottom: 118, height: 1 }}
          animate={{ background: ['linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)', 'linear-gradient(90deg, transparent, rgba(255,255,180,1), transparent)', 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'], boxShadow: ['0 0 8px rgba(255,215,0,0.4)', '0 0 18px rgba(255,215,0,0.9)', '0 0 8px rgba(255,215,0,0.4)'] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        {/* Info strip */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pt-2 pb-3 z-20"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 100%)', backdropFilter: 'blur(16px)' }}>
          <div className="leading-tight font-black truncate"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 21, letterSpacing: 2, color: '#FFF0A0', textShadow: '0 0 18px rgba(255,215,0,0.65)' }}>
            {player.name}
          </div>
          <div className="uppercase mb-2" style={{ fontSize: 9, letterSpacing: 3, color: 'rgba(255,255,255,0.28)' }}>
            {player.role}
          </div>
          <div className="flex gap-1.5">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 rounded-md text-center py-1.5 px-1"
                style={{ background: 'rgba(255,215,0,0.07)', border: '1px solid rgba(255,215,0,0.18)' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 15, lineHeight: 1, color: '#FFE566', fontWeight: 900, textShadow: '0 0 10px rgba(255,215,0,0.75)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 7, letterSpacing: 2, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ border: '2px solid rgba(255,215,0,0.75)' }} />
        <div className="absolute rounded-xl pointer-events-none" style={{ inset: 5, border: '1px solid rgba(255,215,0,0.18)' }} />

        {/* Corner ornaments */}
        <svg className="absolute inset-0 pointer-events-none z-30" width="230" height="360" viewBox="0 0 230 360" fill="none">
          <path d="M 2 2 L 26 2 M 2 2 L 2 26" stroke="#FFD700" strokeWidth="3.5" strokeOpacity="1" />
          <path d="M 228 2 L 204 2 M 228 2 L 228 26" stroke="#FFD700" strokeWidth="3.5" strokeOpacity="1" />
          <path d="M 2 358 L 26 358 M 2 358 L 2 334" stroke="#FFD700" strokeWidth="3.5" strokeOpacity="1" />
          <path d="M 228 358 L 204 358 M 228 358 L 228 334" stroke="#FFD700" strokeWidth="3.5" strokeOpacity="1" />
          <polygon points="115,357 123,347 115,338 107,347" fill="#FFD700" opacity="0.85" />
          <line x1="2" y1="72" x2="2" y2="128" stroke="#FFD700" strokeWidth="4" strokeOpacity="0.65" />
          <line x1="8" y1="77" x2="8" y2="123" stroke="#FFD700" strokeWidth="1.5" strokeOpacity="0.28" />
          <line x1="228" y1="72" x2="228" y2="128" stroke="#FFD700" strokeWidth="4" strokeOpacity="0.65" />
          <line x1="222" y1="77" x2="222" y2="123" stroke="#FFD700" strokeWidth="1.5" strokeOpacity="0.28" />
          <line x1="2" y1="288" x2="2" y2="232" stroke="#FFD700" strokeWidth="4" strokeOpacity="0.65" />
          <line x1="228" y1="288" x2="228" y2="232" stroke="#FFD700" strokeWidth="4" strokeOpacity="0.65" />
        </svg>
      </div>
    </motion.div>
  )
}