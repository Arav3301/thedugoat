'use client'

import { motion } from 'framer-motion'
import { Player } from '@/src/data/types'
import { CommonFrame, RareFrame, EpicFrame, LegendaryFrame } from './CardFrames'
import GoatCard from './goatcard'

interface PlayerCardProps {
  player: Player
  onClick?: () => void
}

const tierConfig = {
  common: {
    label: 'Common',
    statColor: '#A0B0C8',
    nameColor: '#C8D8E8',
    accentColor: '#7A8FA8',
    glowColor: 'rgba(120,144,168,0.25)',
    bgGradient: 'linear-gradient(160deg, #1C2535 0%, #0E1520 100%)',
    badgeStyle: { background: 'rgba(120,144,168,0.15)', color: '#A0B8D0', border: '1px solid rgba(120,144,168,0.3)' },
  },
  rare: {
    label: 'Rare',
    statColor: '#7EC8FF',
    nameColor: '#C0DEFF',
    accentColor: '#2E86DE',
    glowColor: 'rgba(46,134,222,0.35)',
    bgGradient: 'linear-gradient(160deg, #091830 0%, #040C1A 100%)',
    badgeStyle: { background: 'rgba(46,134,222,0.15)', color: '#7EC8FF', border: '1px solid rgba(46,134,222,0.4)' },
  },
  epic: {
    label: 'Epic',
    statColor: '#D4A0FF',
    nameColor: '#ECD0FF',
    accentColor: '#9B30FF',
    glowColor: 'rgba(155,48,255,0.4)',
    bgGradient: 'linear-gradient(160deg, #1A0535 0%, #0A0218 100%)',
    badgeStyle: { background: 'rgba(155,48,255,0.15)', color: '#D4A0FF', border: '1px solid rgba(155,48,255,0.5)' },
  },
  legendary: {
    label: 'Legendary',
    statColor: '#FFB347',
    nameColor: '#FFD4A0',
    accentColor: '#E8750A',
    glowColor: 'rgba(232,117,10,0.4)',
    bgGradient: 'linear-gradient(160deg, #1E0A00 0%, #0F0500 100%)',
    badgeStyle: { background: 'rgba(232,117,10,0.15)', color: '#FFB347', border: '1px solid rgba(232,117,10,0.45)' },
  },
}

const FrameMap = {
  common: CommonFrame,
  rare: RareFrame,
  epic: EpicFrame,
  legendary: LegendaryFrame,
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

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  if (player.tier === 'goat') {
    return <GoatCard player={player} onClick={onClick} />
  }

  const c = tierConfig[player.tier]
  const stats = getStats(player)
  const Frame = FrameMap[player.tier]
  const isLegendary = player.tier === 'legendary'
  const isEpic = player.tier === 'epic'
  const isRare = player.tier === 'rare'
  const initials = player.name.split(' ').filter(n => n.length > 0).map(n => n[0]).join('')

  return (
    <motion.div
      className="relative cursor-pointer select-none flex-shrink-0"
      style={{ width: 210, height: 330 }}
      initial={{ opacity: 0, y: 50, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: isLegendary ? -14 : -10, scale: 1.04, transition: { duration: 0.25, ease: 'easeOut' } }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
    >
      <motion.div className="absolute inset-0 blur-2xl rounded-full"
        style={{ background: c.glowColor, opacity: 0.2 }}
        animate={isLegendary ? { opacity: [0.15, 0.4, 0.15] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ background: c.bgGradient }}>
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `linear-gradient(${c.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${c.accentColor} 1px, transparent 1px)`, backgroundSize: '22px 22px' }}
        />

        {isLegendary && (
          <>
            <motion.div className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 100% 55% at 50% 100%, rgba(232,117,10,0.22) 0%, transparent 65%)' }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div className="absolute z-10 pointer-events-none"
              style={{ top: 0, left: '-60%', width: '60%', height: '100%', background: 'linear-gradient(105deg, transparent 30%, rgba(232,117,10,0.08) 48%, rgba(255,180,50,0.18) 50%, rgba(232,117,10,0.08) 52%, transparent 70%)' }}
              animate={{ left: ['-60%', '160%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            />
            <motion.div className="absolute top-0 bottom-0 left-0 z-10 pointer-events-none"
              style={{ width: 2, background: 'linear-gradient(180deg, transparent, rgba(232,117,10,0.8), transparent)' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
            />
            <motion.div className="absolute top-0 bottom-0 right-0 z-10 pointer-events-none"
              style={{ width: 2, background: 'linear-gradient(180deg, transparent, rgba(232,117,10,0.8), transparent)' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8, delay: 0.9 }}
            />
          </>
        )}

        {isEpic && (
          <>
            <motion.div className="absolute z-10 pointer-events-none rounded-full"
              style={{ width: 160, height: 160, top: '18%', left: '50%', marginLeft: -80, background: 'conic-gradient(from 0deg, transparent 0%, rgba(155,48,255,0.06) 20%, rgba(155,48,255,0.16) 40%, transparent 60%)' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(180deg, rgba(155,48,255,0.12) 0%, transparent 40%)' }}
              animate={{ opacity: [0, 1, 0, 0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.div className="absolute top-0 bottom-0 left-0 z-10 pointer-events-none"
              style={{ width: 1.5, background: 'linear-gradient(180deg, transparent 10%, #9B30FF 50%, transparent 90%)' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
            />
            <motion.div className="absolute top-0 bottom-0 right-0 z-10 pointer-events-none"
              style={{ width: 1.5, background: 'linear-gradient(180deg, transparent 10%, #9B30FF 50%, transparent 90%)' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, delay: 0.7 }}
            />
          </>
        )}

        {isRare && (
          <motion.div className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 38%, rgba(46,134,222,0.1) 0%, transparent 55%)' }}
            animate={{ opacity: [0.3, 0.85, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <div className="absolute top-3 left-3 z-20">
          <span className="text-[9px] font-bold tracking-[3px] px-2 py-1 rounded uppercase" style={c.badgeStyle}>
            {c.label}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20">
          <span className="text-[9px] text-white/20 font-mono">#{player.card.card_number}</span>
        </div>

        <div className="relative flex flex-col items-center justify-center" style={{ marginTop: 44, height: 162 }}>
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 55%, ${c.accentColor}1A 0%, transparent 65%)` }} />
          <motion.div className="relative z-10 flex items-center justify-center rounded-full"
            style={{ width: 90, height: 90, border: `3px solid ${c.accentColor}`, background: `radial-gradient(circle at 35% 35%, ${c.accentColor}22, transparent 55%)`, boxShadow: `0 0 22px ${c.accentColor}40, inset 0 0 18px ${c.accentColor}08` }}
          >
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, fontWeight: 900, color: c.accentColor, letterSpacing: 2, textShadow: `0 0 16px ${c.accentColor}CC` }}>
              {initials}
            </span>
          </motion.div>
          <div className="mt-2 text-[10px] font-bold tracking-[5px] z-10" style={{ color: `${c.accentColor}AA` }}>
            {player.nation_code}
          </div>

          {isEpic && [...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: i % 2 === 0 ? 3 : 2, height: i % 2 === 0 ? 3 : 2, background: '#C06BFF', left: `${18 + i * 14}%`, top: `${58 + (i % 2) * 16}%` }}
              animate={{ y: [0, -50, -100], opacity: [0, 0.9, 0], scale: [0, 1.2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
            />
          ))}
          {isRare && [...Array(3)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: 3, height: 3, background: '#4A90D9', left: `${28 + i * 20}%`, top: '62%' }}
              animate={{ y: [0, -35, -70], opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }}
            />
          ))}
        </div>

        <div className="absolute left-5 right-5" style={{ bottom: 108, height: 1, background: `linear-gradient(90deg, transparent, ${c.accentColor}, transparent)`, opacity: 0.45 }} />

        <div className="absolute bottom-0 left-0 right-0 px-3 pt-2 pb-3 z-20"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)', backdropFilter: 'blur(12px)' }}>
          <div className="leading-tight truncate font-black" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 19, letterSpacing: 1.5, color: c.nameColor }}>
            {player.name}
          </div>
          <div className="uppercase mb-2" style={{ fontSize: 9, letterSpacing: 3, color: 'rgba(255,255,255,0.32)' }}>
            {player.role}
          </div>
          <div className="flex gap-1.5">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 rounded-md text-center py-1.5 px-1"
                style={{ background: `${c.accentColor}10`, border: `1px solid ${c.accentColor}22` }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 14, lineHeight: 1, color: c.statColor, fontWeight: 900 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 7, letterSpacing: 2, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Frame accentColor={c.accentColor} width={210} height={330} />
    </motion.div>
  )
}