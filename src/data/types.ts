export type Tier = 'common' | 'rare' | 'epic' | 'legendary' | 'goat'
export type Role = 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper Batsman'
export type PitchType = 'flat' | 'seaming' | 'spinning' | 'bouncy' | 'dead'
export type Format = 'test' | 'odi' | 't20'

export interface FormatStats {
  matches?: number | null
  runs?: number | null
  average?: number | null
  hundreds?: number | null
  fifties?: number | null
  highest_score?: number | null
  strike_rate?: number | null
  wickets?: number | null
  bowling_average?: number | null
  economy?: number | null
}

export interface PlayerRatings {
  batting: number
  bowling: number
  fielding: number
  captaincy: number
  test_suitability: number
  odi_suitability: number
  t20_suitability: number
}

export interface PlayerCard {
  tier: Tier
  background_theme: string
  accent_color: string
  glow_color: string
  card_number: string
  edition: string
}

export interface Player {
  id: string
  name: string
  nation: string
  nation_code: string
  role: Role
  batting_style: string
  bowling_style: string
  tier: Tier
  stats: {
    test: FormatStats
    odi: FormatStats
    t20: FormatStats
  }
  ratings: PlayerRatings
  card: PlayerCard
}