export type PlayerDetails = {
  playerId: number
  name: string
  mkcId: number
  maxMmr: number
  overallRank: number
  eventsPlayed: number
  winRate: number
  winsLastTen: number
  winLossLastTen: string
  gainLossLastTen: number
  largestGain: number
  largestLoss: number
  averageScore: number
  averageLastTen: number
  partnerAverage: number
  mmrChanges: MmrChange[]
  forumLink: string
}

export type MmrChange = {
  changeId: number
  newMmr: number
  mmrDelta: number
  reason: string
  time: string
  score: number
  partnerScores: number[]
  rank: number
}
