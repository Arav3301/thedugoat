'use client'

// SVG Frame overlays — one per tier
// These sit ON TOP of card content as decorative frames
// Content underneath is always a safe rectangle — nothing ever cuts

interface FrameProps {
  accentColor: string
  width?: number
  height?: number
}

// COMMON — clean angled corner cuts, military dog-tag feel
export function CommonFrame({ accentColor, width = 210, height = 330 }: FrameProps) {
  const cut = 14
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-30"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* Main border with cut corners */}
      <path
        d={`M ${cut} 1 L ${width - cut} 1 L ${width - 1} ${cut} L ${width - 1} ${height - 1} L 1 ${height - 1} L 1 ${cut} Z`}
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.45"
        fill="none"
      />
      {/* Corner accent marks */}
      <line x1={cut + 8} y1="1" x2={cut + 18} y2="1" stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
      <line x1={width - cut - 8} y1="1" x2={width - cut - 18} y2="1" stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
      <line x1="1" y1={cut + 8} x2="1" y2={cut + 18} stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
      <line x1={width - 1} y1={cut + 8} x2={width - 1} y2={cut + 18} stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
      {/* Bottom corners */}
      <line x1="1" y1={height - 20} x2="1" y2={height - 8} stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
      <line x1={width - 1} y1={height - 20} x2={width - 1} y2={height - 8} stroke={accentColor} strokeWidth="2" strokeOpacity="0.7" />
    </svg>
  )
}

// RARE — pointed bottom on the frame only, content safe
export function RareFrame({ accentColor, width = 210, height = 330 }: FrameProps) {
  const midX = width / 2
  const pointY = height - 1
  const pointStart = height - 20
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-30"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* Outer border — rectangle top, pointed bottom */}
      <path
        d={`M 1 1 L ${width - 1} 1 L ${width - 1} ${pointStart} L ${midX} ${pointY} L 1 ${pointStart} Z`}
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.5"
        fill="none"
      />
      {/* Inner border — slightly inset */}
      <path
        d={`M 5 5 L ${width - 5} 5 L ${width - 5} ${pointStart - 2} L ${midX} ${pointY - 6} L 5 ${pointStart - 2} Z`}
        stroke={accentColor}
        strokeWidth="0.5"
        strokeOpacity="0.2"
        fill="none"
      />
      {/* Top corner accents */}
      <path d={`M 1 1 L 20 1`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M 1 1 L 1 20`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M ${width - 1} 1 L ${width - 20} 1`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M ${width - 1} 1 L ${width - 1} 20`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      {/* Point accent dot */}
      <circle cx={midX} cy={pointY - 3} r="2.5" fill={accentColor} opacity="0.6" />
    </svg>
  )
}

// EPIC — shield frame overlay with decorative side notches
export function EpicFrame({ accentColor, width = 210, height = 330 }: FrameProps) {
  const midX = width / 2
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-30"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* Main shield border */}
      <path
        d={`M 1 1 L ${width - 1} 1 L ${width - 1} ${height - 20} L ${midX} ${height - 1} L 1 ${height - 20} Z`}
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.55"
        fill="none"
      />
      {/* Inner shield */}
      <path
        d={`M 6 6 L ${width - 6} 6 L ${width - 6} ${height - 23} L ${midX} ${height - 8} L 6 ${height - 23} Z`}
        stroke={accentColor}
        strokeWidth="0.5"
        strokeOpacity="0.2"
        fill="none"
      />
      {/* Top decorative bar */}
      <line x1="20" y1="1" x2={width - 20} y2="1" stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      {/* Side notches */}
      <path d={`M 1 80 L 8 72 L 8 88 Z`} fill={accentColor} opacity="0.4" />
      <path d={`M ${width - 1} 80 L ${width - 8} 72 L ${width - 8} 88 Z`} fill={accentColor} opacity="0.4" />
      {/* Corner gems */}
      <rect x="1" y="1" width="6" height="6" fill={accentColor} opacity="0.6" />
      <rect x={width - 7} y="1" width="6" height="6" fill={accentColor} opacity="0.6" />
      {/* Bottom point accent */}
      <circle cx={midX} cy={height - 4} r="3" fill={accentColor} opacity="0.7" />
      <line x1={midX - 20} y1={height - 30} x2={midX} y2={height - 4} stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" />
      <line x1={midX + 20} y1={height - 30} x2={midX} y2={height - 4} stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  )
}

// LEGENDARY — trophy frame with top centre notch
export function LegendaryFrame({ accentColor, width = 210, height = 330 }: FrameProps) {
  const midX = width / 2
  const notchW = 28
  const notchH = 16
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-30"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* Outer border with top notch */}
      <path
        d={`
          M 1 1
          L ${midX - notchW} 1
          L ${midX - notchW + 6} ${notchH}
          L ${midX + notchW - 6} ${notchH}
          L ${midX + notchW} 1
          L ${width - 1} 1
          L ${width - 1} ${height - 1}
          L 1 ${height - 1}
          Z
        `}
        stroke={accentColor}
        strokeWidth="1.5"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Inner border */}
      <path
        d={`
          M 5 5
          L ${midX - notchW + 2} 5
          L ${midX - notchW + 8} ${notchH - 2}
          L ${midX + notchW - 8} ${notchH - 2}
          L ${midX + notchW - 2} 5
          L ${width - 5} 5
          L ${width - 5} ${height - 5}
          L 5 ${height - 5}
          Z
        `}
        stroke={accentColor}
        strokeWidth="0.5"
        strokeOpacity="0.25"
        fill="none"
      />
      {/* Notch diamond */}
      <polygon
        points={`${midX},2 ${midX + 5},${notchH / 2} ${midX},${notchH - 1} ${midX - 5},${notchH / 2}`}
        fill={accentColor}
        opacity="0.7"
      />
      {/* Side double lines */}
      <line x1="1" y1="40" x2="1" y2="100" stroke={accentColor} strokeWidth="3" strokeOpacity="0.5" />
      <line x1="5" y1="44" x2="5" y2="96" stroke={accentColor} strokeWidth="1" strokeOpacity="0.25" />
      <line x1={width - 1} y1="40" x2={width - 1} y2="100" stroke={accentColor} strokeWidth="3" strokeOpacity="0.5" />
      <line x1={width - 5} y1="44" x2={width - 5} y2="96" stroke={accentColor} strokeWidth="1" strokeOpacity="0.25" />
      {/* Bottom corner accents */}
      <path d={`M 1 ${height - 1} L 24 ${height - 1}`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M 1 ${height - 1} L 1 ${height - 20}`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M ${width - 1} ${height - 1} L ${width - 24} ${height - 1}`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
      <path d={`M ${width - 1} ${height - 1} L ${width - 1} ${height - 20}`} stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.8" />
    </svg>
  )
}

// G.O.A.T — full crest frame with crown at top
export function GoatFrame({ accentColor, width = 210, height = 330 }: FrameProps) {
  const midX = width / 2
  return (
    <svg
      className="absolute inset-0 pointer-events-none z-30"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {/* Outer border — thick gold */}
      <rect x="1" y="1" width={width - 2} height={height - 2}
        stroke={accentColor} strokeWidth="2.5" strokeOpacity="0.9" rx="4" fill="none" />
      {/* Inner border */}
      <rect x="6" y="6" width={width - 12} height={height - 12}
        stroke={accentColor} strokeWidth="0.75" strokeOpacity="0.35" rx="3" fill="none" />

      {/* TOP CROWN — large, proud, centred */}
      {/* Crown base bar */}
      <rect x={midX - 32} y="44" width="64" height="5"
        fill={accentColor} opacity="0.9" rx="1" />
      {/* Crown left spike */}
      <polygon
        points={`${midX - 32},44 ${midX - 32},22 ${midX - 18},36`}
        fill={accentColor} opacity="0.85" />
      {/* Crown centre spike — tallest */}
      <polygon
        points={`${midX - 14},44 ${midX},14 ${midX + 14},44`}
        fill={accentColor} opacity="1" />
      {/* Crown right spike */}
      <polygon
        points={`${midX + 32},44 ${midX + 32},22 ${midX + 18},36`}
        fill={accentColor} opacity="0.85" />
      {/* Crown jewels */}
      <circle cx={midX - 32} cy="22" r="3.5" fill={accentColor} opacity="1" />
      <circle cx={midX} cy="14" r="4" fill="#FFFFFF" opacity="0.9" />
      <circle cx={midX + 32} cy="22" r="3.5" fill={accentColor} opacity="1" />
      {/* Small side jewels */}
      <circle cx={midX - 18} cy="36" r="2" fill="#FFFFFF" opacity="0.7" />
      <circle cx={midX + 18} cy="36" r="2" fill="#FFFFFF" opacity="0.7" />

      {/* Side ornate bars */}
      <line x1="2" y1="55" x2="2" y2="110"
        stroke={accentColor} strokeWidth="4" strokeOpacity="0.7" />
      <line x1="8" y1="60" x2="8" y2="105"
        stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1={width - 2} y1="55" x2={width - 2} y2="110"
        stroke={accentColor} strokeWidth="4" strokeOpacity="0.7" />
      <line x1={width - 8} y1="60" x2={width - 8} y2="105"
        stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.3" />

      {/* Bottom ornate bars */}
      <line x1="2" y1={height - 55} x2="2" y2={height - 110}
        stroke={accentColor} strokeWidth="4" strokeOpacity="0.7" />
      <line x1={width - 2} y1={height - 55} x2={width - 2} y2={height - 110}
        stroke={accentColor} strokeWidth="4" strokeOpacity="0.7" />

      {/* Corner ornaments */}
      <path d={`M 2 2 L 22 2 M 2 2 L 2 22`}
        stroke={accentColor} strokeWidth="3.5" strokeOpacity="1" />
      <path d={`M ${width - 2} 2 L ${width - 22} 2 M ${width - 2} 2 L ${width - 2} 22`}
        stroke={accentColor} strokeWidth="3.5" strokeOpacity="1" />
      <path d={`M 2 ${height - 2} L 22 ${height - 2} M 2 ${height - 2} L 2 ${height - 22}`}
        stroke={accentColor} strokeWidth="3.5" strokeOpacity="1" />
      <path d={`M ${width - 2} ${height - 2} L ${width - 22} ${height - 2} M ${width - 2} ${height - 2} L ${width - 2} ${height - 22}`}
        stroke={accentColor} strokeWidth="3.5" strokeOpacity="1" />

      {/* Bottom centre diamond */}
      <polygon
        points={`${midX},${height - 3} ${midX + 8},${height - 12} ${midX},${height - 21} ${midX - 8},${height - 12}`}
        fill={accentColor} opacity="0.8" />
    </svg>
  )
}