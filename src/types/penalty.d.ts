export type Penalty = {
  id: number
  awardedOn: string
  isStrike: boolean
  prevMmr: number
  newMmr: number
  amount: number
  playerId: number
  playerName: string
}
